import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const crptoApiHeaders = {
    'x-rapidapi-key': '6d30a76b25msh1f9d0ea1b5dee61p10a70cjsn4ebc6da07c84',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl ="https://coinranking1.p.rapidapi.com";
const createRequest =(url)=> ({url, headers: crptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    }),
})
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;




    // const options = {
    //     method: 'GET',
    //     url: 'https://coinranking1.p.rapidapi.com/stats',
    //     params: {
    //       referenceCurrencyUuid: 'yhjMzLPhuIDl'
    //     },
    //     headers: {
    //       'x-rapidapi-key': '6d30a76b25msh1f9d0ea1b5dee61p10a70cjsn4ebc6da07c84',
    //       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    //     }
    //   };