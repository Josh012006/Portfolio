import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

import { useSelector, TypedUseSelectorHook } from "react-redux";





const store = configureStore({
    reducer: {
        theme: themeReducer
    }
});



export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;