import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import productSlice from "./productSlice";
import productDetailSlice from "./productDetailSlice";
import specificItemSlice from "./specificItem";
import cartSlice from "./cartSlice";
import userProductSlice from "./userProductSlice";

export default configureStore({
  reducer: {
    loggedIn: userSlice,
    product: productSlice,
    productDetail: productDetailSlice,
    relatedItem: specificItemSlice,
    cart: cartSlice,
    userProduct : userProductSlice
  },
});
