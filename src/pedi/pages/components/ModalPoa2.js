import React from 'react'
import { numeroPoaConfig, anioPoaConfig } from '../../../ConfiguracionApp'
import {useCreatePoa2Mutation, useGetIndicadorPediIDQuery, usePutIndicadorPediIDMutation} from '../../services/pediApi'

import { useState, } from 'react';
export default function ModalPoa2({ indicadorPedi }) {
    
    const user = JSON.parse(localStorage.getItem('user') || "{}")

    const userDatos = JSON.parse(localStorage.getItem('userDatos') || "{}")
    const {data: dataIndicador, isSuccess:isSuccessIndicador} = useGetIndicadorPediIDQuery({access:user.access, id: indicadorPedi})

    const [createPoa, { data, isSuccess }] = useCreatePoa2Mutation()
    const [updateIndicadr] = usePutIndicadorPediIDMutation()


    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => { setIsOpen(true) };

  

    const closeModal = (e) => {
        setIsOpen(false)
    };


    const guardarCambios = async (e) => {
        e.preventDefault()
        const pro1 = e.target.elements.pro1.value.trim()
        const pro2 = e.target.elements.pro2.value.trim()
        const pro3 = e.target.elements.pro3.value.trim()

        const pro4 = e.target.elements.pro4.value.trim()
        const pro5 = e.target.elements.pro5.value.trim()
        const pro6 = e.target.elements.pro6.value.trim()

        const pro7 = e.target.elements.pro7.value.trim()
        const pro8 = e.target.elements.pro8.value.trim()
        const pro9 = e.target.elements.pro9.value.trim()

        const pro10 = e.target.elements.pro10.value.trim()
        const pro11 = e.target.elements.pro11.value.trim()
        const pro12 = e.target.elements.pro12.value.trim()
        const totalAnio = e.target.elements.totalAnio.value.trim()
        const tempo = {
            indicadorPedi: indicadorPedi,
            anio: anioPoaConfig,
            totalAnio: totalAnio,
            pro1: pro1,
            pro2: pro2,
            pro3: pro3,
            pro4: pro4,
            pro5: pro5,
            pro6: pro6,
            pro7: pro7,
            pro8: pro8,
            pro9: pro9,
            pro10: pro10,
            pro11: pro11,
            pro12: pro12,
            observacion: 'eeee',
            digitador : userDatos.id,
        }
 
       //createPoa({access:user.access, rest:   tempo })
       try{
        const tempoIndicador = {
            ...dataIndicador, numeroPoa : numeroPoaConfig }

        const poaCreado = await createPoa({access:user.access, rest:   tempo }).unwrap()
        //const {data: dataIndicador, isSuccess:isSuccessIndicador} = await useGetIndicadorPediIDQuery({access:user.access, id: indicadorPedi}).unwrap()
        //console.log('daaaaaa ind', dataIndicador)

        const indicadorActualizado = await updateIndicadr({access: user.access, id:indicadorPedi, rest:tempoIndicador }).unwrap()

       }catch(error){
        console.log('error')
       }
   
        console.log('tempo',tempo)

        closeModal()

    }

    return (
        <>
            <button className=" rounded" onClick={openModal}>
                +
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-1/2 mx-auto my-6">
                        {/* Contenido del modal */}
                        <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                            {/* Encabezado del modal */}

                            <form onSubmit={guardarCambios} method='PUT'>


                                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">Total :</label>
                                        <input
                                            required
                                            type="number"
                                            name="totalAnio"
                                            id="totalAnio"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro1:</label>
                                        <input

                                            type="number"
                                            name="pro1"
                                            id="pro1"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro2:</label>
                                        <input
                                            type="number"
                                            name="pro2"
                                            id="pro2"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro3:</label>
                                        <input
                                            type="number"
                                            name="pro3"
                                            id="pro3"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro4:</label>
                                        <input
                                            type="number"
                                            name="pro4"
                                            id="pro4"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro5:</label>
                                        <input
                                            type="number"
                                            name="pro5"
                                            id="pro5"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro6:</label>
                                        <input
                                            type="number"
                                            name="pro6"
                                            id="pro6"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro7:</label>
                                        <input
                                            type="number"
                                            name="pro7"
                                            id="pro7"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro8:</label>
                                        <input
                                            type="number"
                                            name="pro8"
                                            id="pro8"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro9:</label>
                                        <input
                                            type="number"
                                            name="pro9"
                                            id="pro9"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro10:</label>
                                        <input
                                            type="number"
                                            name="pro10"
                                            id="pro10"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro11:</label>
                                        <input
                                            type="number"
                                            name="pro11"
                                            id="pro11"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4 mr-1">
                                        <label className="block text-xs font-bold mb-2">pro12:</label>
                                        <input
                                            type="number"
                                            name="pro12"
                                            id="pro12"
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
