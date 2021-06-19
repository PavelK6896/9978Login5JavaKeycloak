import {configureStore} from '@reduxjs/toolkit'
import state1 from "./state1";

export const store = configureStore({
    reducer: {
        state1: state1
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch