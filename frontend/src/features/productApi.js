import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (buillder) => ({
        getAllProducts: buillder.query({
            query: () => "products",
        })
    })
})

export const { useGetAllProductsQuery, } = productApi