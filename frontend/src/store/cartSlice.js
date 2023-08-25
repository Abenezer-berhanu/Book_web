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
            state.data = state.data.respnose.map(item => item._id !== action.payload._id)
            state.value = state.data.response.length
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

export const getCartItems = createAsyncThunk('getting cart', async() => {
    const res = await axios(`${API_URI}/cart`)
    const result = await res.data
    return result
})




export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions