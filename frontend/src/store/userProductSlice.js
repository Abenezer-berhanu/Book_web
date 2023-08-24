import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URI } from "../constants";

const initialState = {
    data: [],
    status: 'idle'
}

const userProductSlice = createSlice({
    name: 'userProduct',
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

const id = JSON.parse(localStorage.getItem("user_data")).user_id;
export const getUserProducts = createAsyncThunk("getUserProducts",async () => {
    const res = await axios(`${API_URI}/products/userProducts/${id}`)
    const result = res.data
    return result
})

export default userProductSlice.reducer