import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URI } from '../constants'


const initialState = {
    data : [],
    status : 'idle'
}

const specificItemSlice = createSlice({
    name : 'reltedItem',
    initialState,
    reducers : {},
    extraReducers:(builder) => {
        builder
        .addCase(getSpecificItem.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(getSpecificItem.fulfilled, (state , action) => {
            state.data = action.payload
            state.status = 'idle'
        })
        .addCase(getSpecificItem.rejected, (state)=> {
            state.status = 'error'
        })
    }
})

export const getSpecificItem = createAsyncThunk('getSpecificItem',async(name) => {
    const res = await axios(`${API_URI}/products/relatedItem/${name}`)
    const result = res.data.products
    return result
})

export default specificItemSlice.reducer