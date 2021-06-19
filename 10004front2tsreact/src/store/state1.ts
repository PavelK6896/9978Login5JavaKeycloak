import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "./store";
import {GET} from "../api/api";
import {D1} from "../api/url";


export const get1 = async (dispatch: AppDispatch) => {
    const {data} = await GET(D1)
    dispatch(get1G(data))
    console.log(data)
}


const state1Slice = createSlice({
    name: 'state1',
    initialState: {
        value1: 0,
        value2: 0,
        idV: []
    },
    reducers: {
        incremented1: state => {
            state.value1 += 1
        },
        decremented1: state => {
            state.value1 -= 1
        },
        get1G: (state, action: PayloadAction<[]>) => {
            state.idV = action.payload
        }
    }
})

export const {incremented1, decremented1, get1G} = state1Slice.actions
export const selectCount = (state: RootState) => state.state1.value1

export default state1Slice.reducer