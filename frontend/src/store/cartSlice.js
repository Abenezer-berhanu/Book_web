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

export const getCartItems = createAsyncThunk('getting cart', async() => {
    const res = await axios(`${API_URI}/products/cart`)
    const result = await res.data
    console.log(result)
    return result
})

export const postCartItems = createAsyncThunk("post cart", async(data) =>{
    const res = await axios.post(`${API_URI}/products/cart`, data)
    const result = res.data
    console.log(result)
})



export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions