import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URI } from '../constants'

const initialState = {
    data : [],
    status : 'idle'
}

const productDetailSlice = createSlice({
    name : "productDetail",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProductDetail.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'idle'
        })
        .addCase(getProductDetail.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const getProductDetail = createAsyncThunk('getSingleProduct', async(id) => {
    const res = await axios(`${API_URI}/products/${id}`)
    const result = res.data.product
    return result
})

export default productDetailSlice.reducer