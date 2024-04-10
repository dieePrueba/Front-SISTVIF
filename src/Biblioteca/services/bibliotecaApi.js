import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RUTA_SERVIDOR } from '../../ApiRoutes'

export const bibliotecaApi = createApi({
    reducerPath: 'bibliotecaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: RUTA_SERVIDOR
    }),

    endpoints: (builder) => ({


        ////////
        getCategoriaObra: builder.query({
            query: (access) => {
                return {
                    url: `/biblioteca/list/categoria_obra/`,
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },

                }
            },

        }),
        ////////
        getTipoObra: builder.query({
            query: (access) => {
                return {
                    url: `/biblioteca/list/tipo_obras/`,
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },

                }
            },

        }),
        ////////
        getMaterialObra: builder.query({
            query: (access) => {
                return {
                    url: `/biblioteca/list/tipo_material/`,
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },
                }
            },
        }),
        ////////
        getEstadoObra: builder.query({
            query: (access) => {
                return {
                    url: `/biblioteca/list/estado_obra/`,
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },
                }
            },
        }),
        ////////

        createObra: builder.mutation({
            query: (parametros) => {

                return {
                    url: `/biblioteca/register/obra/`,
                    method: 'POST',
                    body: {
                        'codigo': parametros[1],
                        'titulo': parametros[2],

                        'editorial': parametros[3],
                        'autor': parametros[4],

                        'anio_publicacion': parametros[5],

                        'tomo': parametros[6],
                        'ubicacion': parametros[7],
                        'categoria': parametros[8],
                        'tipo_obra': parametros[9],
                        'tipo_material': parametros[10],
                        'estado_obra': parametros[11],
                        'observacion': parametros[12],
                        'digitador': parametros[13],

                    },
                    headers: { Authorization: `JWT ${parametros[0]}` },
                }
            },
            invalidatesTags: ['getDocumetos_evidencia']
        }),

        ////////
        createAutor: builder.mutation({
            query: (parametros) => {
                return {
                    url: `/biblioteca/register/autor/`,
                    method: 'POST',
                    body: {
                        'nombres': parametros[1],
                        'estado': parametros[2],
                        'observacion': parametros[3],
                        'digitador': parametros[4],

                    },
                    headers: { Authorization: `JWT ${parametros[0]}` },
                }
            },
            invalidatesTags: ['getTodosAutores'],
        }),
        /////
        getListAutores: builder.query({
            query: (access) => {
                return {
                    url: `/biblioteca/list/autor/`,
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },
                }
            },
            providesTags: ['getTodosAutores']
        }),
        ////////
        createObraAutor: builder.mutation({
            query: (parametros) => {
                return {
                    url: '/biblioteca/register/obraautor/',
                    method: 'POST',
                    body: {
                        'autor_id': parametros[1],
                        'obra_id': parametros[2],
                        'digitador': parametros[3],
                        'observacion': parametros[4],
                    },
                    headers: { Authorization: `JWT ${parametros[0]}` },
                }
            },
        }),
        /////
        getListAutoresObras_todos: builder.query({
            query: (access) => {
                return {
                    url: '/biblioteca/list/obras_autores/todos/',
                    method: 'GET',
                    headers: { Authorization: `JWT ${access}` },
                }
            },
        }),
        /////
        getListFilter_Titulos: builder.query({
            query: (titulo) => {
                return {
                    url: `/biblioteca/filtro/titulo/${titulo}/`,
                    method: 'GET',
                    headers: { Authorization: `` },
                }
            },
        }),
        /////
        getListFilter_Titulos_id: builder.query({
            query: (id) => {
                return {
                    url: `/biblioteca/filtro/titulo/id/${id}/`,
                    method: 'GET',
                    headers: { Authorization: `` },
                }
            },
        }),
        /////
        getListFilter_Autores_idObra: builder.query({
            query: (id) => {
                return {
                    url: `/biblioteca/filtro/autor_por_obra/id/${id}/`,
                    method: 'GET',
                    headers: { Authorization: `` },
                }
            },
        }),
        /////



    })
})


export const {
    useGetCategoriaObraQuery,
    useGetTipoObraQuery,
    useGetMaterialObraQuery,
    useGetEstadoObraQuery,
    useCreateObraMutation,

    useCreateAutorMutation,
    useGetListAutoresQuery,
    useCreateObraAutorMutation,
    useGetListAutoresObras_todosQuery,

    useGetListFilter_TitulosQuery,
    useGetListFilter_Titulos_idQuery,
    useGetListFilter_Autores_idObraQuery,
    


} = bibliotecaApi
