import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URI } from '../constants'

const initialState = {
    data: [],
    status : 'idle'
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'idle'
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = 'error'
        })
    }
})

export const getProducts = createAsyncThunk('AllProduct/get', async() => {
    const res = await axios(`${API_URI}/products`);
    return res.data.products
})

export default productSlice.reducer