import React from 'react'
import Select from "react-select"
import { useState, } from 'react';
import { useGetUsuariosDocentesQuery } from '../../usuarios/services/usuariosApi'
import {useCreateDocumentoEvaluacionMutation, useGetPeriodoAcademicoQuery} from '../services/evaluacionApi'
import { IoIosAddCircleOutline } from "react-icons/io";

export default function ModalCreateDocumento({ evidenciaID }) {
    const user = JSON.parse(localStorage.getItem('user') || "{}")
    const userDatos = JSON.parse(localStorage.getItem('userDatos') || "{}")


    const { data: dataPeriodo, isSuccess: isSuccessPeriodo } = useGetPeriodoAcademicoQuery(user.access)
    const [periodo, SetPeriodo] = useState('')



    const { data: dataDocentes, isSuccess: isSuccessDocentes } = useGetUsuariosDocentesQuery(user.access)
    const [responsable, SetResponsable] = useState('')

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => { setIsOpen(true) };

    const closeModal = (e) => {
        setIsOpen(false)
    };

    const [crearDocumento] = useCreateDocumentoEvaluacionMutation()

    const guardarCambios = async (e) => {
        e.preventDefault()
        const numero = e.target.elements.numero.value.trim()
        const documento = e.target.elements.documento.value.trim()
        const rest = {
            evidenciaEvaluacion: evidenciaID,
            nombre: documento,
            numeral: numero,
            digitador: userDatos.id,
            responsable:responsable,
            periodoAcademico: periodo,
        

        }
        crearDocumento({access:user.access, rest:rest})

        console.log(rest)

        closeModal()

    }

    return (
        <>
            <button className="bg-gray-100 hover:bg-green-300  font-bold py-1 px-1 rounded" onClick={openModal}>
            <IoIosAddCircleOutline />
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-1/2 mx-auto my-6">
                        {/* Contenido del modal */}
                        <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                            {/* Encabezado del modal */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                                <h3 className="text-lg font-semibold"> Nuevo documento</h3>
                                <button
                                    onClick={closeModal}
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none bg-gray">x</span>
                                </button>
                            </div>


                            <form onSubmit={guardarCambios} method='PUT' className='p-5'>


                                <div className="grid grid-cols-1  gap-8">

                                    <div className="mb-4 mr-1">
                                        <label className="block text-sm font-semibold text-gray-500  ">Numero:</label>
                                        <input
                                            required
                                            type="number"
                                            name="numero"
                                            id="numero"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>



                                    <div className="mb-4 mr-1">
                                        <label className="block text-sm font-semibold text-gray-500  ">Documento:</label>
                                        <input
                                            required
                                            type="text"
                                            name="documento"
                                            id="pro11"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className='grid  grid-cols-2'>

                                    <div className="mb-4 gap-4">
                                        <label htmlFor="responsable" className="block text-sm font-semibold text-gray-500  " >Docente responsable:</label>
                                        <Select
                                            options={dataDocentes}
                                            onChange={(selectedOption) => SetResponsable(selectedOption.value)}

                                            required
                                            className='shadow-md'
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="responsable" className="block text-sm font-semibold text-gray-500  " >Periodo académico:</label>
                                        <Select
                                            options={dataPeriodo}
                                            onChange={(selectedOption) => SetPeriodo(selectedOption.value)}
                                            className='shadow-md'
                                        />
                                    </div>
         
                                    </div>

                
                            
                                    <button
                                        type="submit"
                                        className="bg-indigo-500 w-1/4 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
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
