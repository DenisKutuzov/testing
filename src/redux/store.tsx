import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./features/BasketSlice";
import { cardApi } from "./services/cardApi";
import ModalSlice from "./features/ModalSlice";
import PayCoinSlice from './features/PayCoinSlice'
import PayDollarSlice from "@/redux/features/PayDollarSlice";

export const store = configureStore({
    reducer: {
        BasketSlice,
        ModalSlice,
        PayCoinSlice,
        PayDollarSlice,
        [cardApi.reducerPath]: cardApi.reducer,
    },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat([cardApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;