import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice.js"

export const store = configureStore({
    reducers: {
        cart: cartSlice
    }
})