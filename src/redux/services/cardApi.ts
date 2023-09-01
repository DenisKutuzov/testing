import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Card = {
    carts : []
};

export const cardApi = createApi({
    reducerPath: "cardApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/carts",
    }),
    endpoints: (builder) => ({
        getCard: builder.query<Card, null>({
            query: () => "",
        }),
    }),
});

export const { useGetCardQuery } = cardApi;