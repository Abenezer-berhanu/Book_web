import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URI } from '../constants'

const initialState = {
    data: [],
    value: 0,
    status: 'idle'
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state , action) => {
            state.data.push(action.payload)
            state.value = state.data.length
        },
        removeFromCart : (state, action) => {
            let datas = action.payload.map(item => item.data)
            state.data = state.data.filter(item => item.data._id !== datas[0]._id)
            state.value = state.data.length
        },
    },
    extraReducers : (builder) => {
        builder
        .addCase(getCartItems.pending,(state) => {
            state.status = 'loading'
        })
        .addCase(getCartItems.fulfilled,(state, action) => {
            state.data = action.payload
            state.status = 'idle'
        })
    }
})

export const getCartItems = createAsyncThunk( async() =>{
    const res = await axios(`${API_URI}/cart`)
    const result = res.data
    return result
})

export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions