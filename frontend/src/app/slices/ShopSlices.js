import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `shop/`,
        }),
        getDataById: builder.query({
            query: (id) => `shop/${id}`,
        }),
        postData: builder.mutation({
            query: (newData) => ({
                url: `shop/`,
                method: "POST",
                body: newData,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `shop/${id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetDataQuery, useDeleteDataMutation, useGetDataByIdQuery, usePostDataMutation } = shopApi