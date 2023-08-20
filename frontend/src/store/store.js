import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../store/userSlice'
import productSlice from "./productSlice";

export default configureStore({
    reducer : {
        loggedIn : userSlice,
        product : productSlice
    }
})