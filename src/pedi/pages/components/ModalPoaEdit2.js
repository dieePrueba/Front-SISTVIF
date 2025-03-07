import React, { useEffect } from 'react'
import { useState, } from 'react';
import { useGetPoaDataIDQuery, usePutPoaDataIDMutation } from '../../services/pediApi'
import { useGetDependencias_allQuery, } from '../../../general/services/generalApi'
import { AiFillEdit } from "react-icons/ai";
function VerEjec(ejecu) {
    let ejecutado = 0
    if (ejecu) {
        ejecutado = ejecu
    }
    return ejecutado
}

export default function ModalPoaEdit2({dataPoaID} ) {


    const user = JSON.parse(localStorage.getItem('user') || "{}")
    const userDatos = JSON.parse(localStorage.getItem('userDatos') || "{}")
    const [updatePoa] = usePutPoaDataIDMutation()
    const { data: dataPoaID2, isSuccess: isSuccessPoaID } = useGetPoaDataIDQuery({ access: user.access, id: dataPoaID.idPoa })

    const [mes1, setMes1] = useState(dataPoaID.pro1);
    const [mes2, setMes2] = useState(dataPoaID.pro2);
    const [mes3, setMes3] = useState(dataPoaID.pro3);
    const [mes4, setMes4] = useState(dataPoaID.pro4);
    const [mes5, setMes5] = useState(dataPoaID.pro5);
    const [mes6, setMes6] = useState(dataPoaID.pro6);
    const [mes7, setMes7] = useState(dataPoaID.pro7);
    const [mes8, setMes8] = useState(dataPoaID.pro8);
    const [mes9, setMes9] = useState(dataPoaID.pro9);
    const [mes10, setMes10] = useState(dataPoaID.pro10);
    const [mes11, setMes11] = useState(dataPoaID.pro11);
    const [mes12, setMes12] = useState(dataPoaID.pro12);
    const [totalAnio, setTotalAnio] = useState(dataPoaID.totalAnio);

    

    const handleInputChange = (e, setter) => {
        setter(Number(e.target.value));
    };


    useEffect(() => {
        setTotalAnio(VerEjec(mes1) + VerEjec(mes2) + VerEjec(mes3) + VerEjec(mes4) + VerEjec(mes5) + VerEjec(mes6) + VerEjec(mes7) + VerEjec(mes8) + VerEjec(mes9) + VerEjec(mes10) + VerEjec(mes11) + VerEjec(mes12));
    }, [mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10, mes11, mes12]);


    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => { setIsOpen(true) };

    const closeModal = (e) => {
        setIsOpen(false)
    };



    const guardarCambios = async (e) => {
        e.preventDefault()

        const tempo = {
            ...dataPoaID2, 
            totalAnio: totalAnio,
            pro1: mes1,
            pro2: mes2,
            pro3: mes3,
            pro4: mes4,
            pro5: mes5,
            pro6: mes6,
            pro7: mes7,
            pro8: mes8,
            pro9: mes9,
            pro10: mes10,
            pro11: mes11,
            pro12: mes12
        }
        updatePoa({ access: user.access, id: dataPoaID.idPoa, rest: tempo })
        closeModal()
    };


    return (
        <>
            <button className="bg-gray-100 hover:bg-green-300  font-bold py-1 px-1 rounded" onClick={openModal}>
                <AiFillEdit />
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-1/2 mx-auto my-6">
                        {/* Contenido del modal */}
                        <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                            {/* Encabezado del modal */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                                <h3 className="text-lg font-semibold"> Planificación operativa anual</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none bg-gray">x</span>
                                </button>
                            </div>
                            {/* Cuerpo del modal */}


                            {/* Pie del modal */}
                            {/* {isSuccessPoaID ? */}
                                <form onSubmit={guardarCambios} method='PUT'>


                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs font-bold mb-2">Total :</label>
                                            <div className="mb-4 mr-1">
                                                <label className="block text-xs font-bold mb-2">Total :</label>
                                                <div className='text-center bg-gray-200 mx-1 p-1 rounded'>{totalAnio}</div>


                                            </div>
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs  mb-2">Pro1:</label>
                                            <input

                                                type="number"
                                                name="pro1"
                                                id="pro1"
                                                defaultValue={ dataPoaID.pro1}
                                                value={mes1} 
                                            onChange={(e) => handleInputChange(e, setMes1)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro2:</label>
                                            <input
                                                type="number"
                                                name="pro2"
                                                id="pro2"
                                                defaultValue={dataPoaID.pro2}
                                                value={mes2} 
                                                onChange={(e) => handleInputChange(e, setMes2)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro3:</label>
                                            <input
                                                type="number"
                                                name="pro3"
                                                id="pro3"
                                                defaultValue={dataPoaID.pro3}
                                                value={mes3} 
                                                onChange={(e) => handleInputChange(e, setMes3)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro4:</label>
                                            <input
                                                type="number"
                                                name="pro4"
                                                id="pro4"
                                                defaultValue={dataPoaID.pro4}
                                                value={mes4} 
                                                onChange={(e) => handleInputChange(e, setMes4)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro5:</label>
                                            <input
                                                type="number"
                                                name="pro5"
                                                id="pro5"
                                                defaultValue={dataPoaID.pro5}
                                                value={mes5} 
                                                onChange={(e) => handleInputChange(e, setMes5)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro6:</label>
                                            <input
                                                type="number"
                                                name="pro6"
                                                id="pro6"
                                                defaultValue={dataPoaID.pro6}
                                                value={mes6} 
                                                onChange={(e) => handleInputChange(e, setMes6)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro7:</label>
                                            <input
                                                type="number"
                                                name="pro7"
                                                id="pro7"
                                                defaultValue={dataPoaID.pro7}
                                                value={mes7} 
                                                onChange={(e) => handleInputChange(e, setMes7)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs  mb-2">Pro8:</label>
                                            <input
                                                type="number"
                                                name="pro8"
                                                id="pro8"
                                                defaultValue={dataPoaID.pro8}
                                                value={mes8} 
                                                onChange={(e) => handleInputChange(e, setMes8)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro9:</label>
                                            <input
                                                type="number"
                                                name="pro9"
                                                id="pro9"
                                                defaultValue={dataPoaID.pro9}
                                                value={mes9} 
                                                onChange={(e) => handleInputChange(e, setMes9)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs  mb-2">Pro10:</label>
                                            <input
                                                type="number"
                                                name="pro10"
                                                id="pro10"
                                                defaultValue={dataPoaID.pro10}
                                                value={mes10} 
                                                onChange={(e) => handleInputChange(e, setMes10)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs  mb-2">Pro11:</label>
                                            <input
                                                type="number"
                                                name="pro11"
                                                id="pro11"
                                                defaultValue={dataPoaID.pro11}
                                                value={mes11} 
                                                onChange={(e) => handleInputChange(e, setMes11)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="mb-4 mr-1">
                                            <label className="block text-xs mb-2">Pro12:</label>
                                            <input
                                                type="number"
                                                name="pro12"
                                                id="pro12"
                                                defaultValue={dataPoaID.pro12}
                                                value={mes12} 
                                                onChange={(e) => handleInputChange(e, setMes12)} 
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            )}
            <div className={`${isOpen ? 'opacity-25 fixed inset-0 z-40 bg-black' : 'hidden'}`}></div>
        </>

    )
}
