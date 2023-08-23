import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URI } from "../constants";

const initialState = {
    data: [],
    status: 'idle'
}

const userProductSlice = createSlice({
    name: 'uerProducts',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
    builder.addCase(getUserProducts.pending, (state) => {
        state.status = 'loading'
    })
    .addCase(getUserProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
    })
    }
})

export const getUserProducts = createAsyncThunk("getUserProducts",async (id, detail) => {
    const res = await axios(`${API_URI}/products/addProduct/${id}`,{detail})
    const result = res.data
    return result
})

export default userProductSlice.reducer