import { createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

const newsHeaders= {
    'x-rapidapi-key': '6d30a76b25msh1f9d0ea1b5dee61p10a70cjsn4ebc6da07c84',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
  }

const baseUrl= "https://cryptocurrency-news2.p.rapidapi.com";

const createRequest =(url)=> ({url, headers: newsHeaders});

export const newsApi = createApi({
    reducerPath : 'newsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getNews: builder.query({
            query: () => createRequest("/v1/coindesk"),
        })
    })

});

export const {useGetNewsQuery} = newsApi;
export default newsApi;
