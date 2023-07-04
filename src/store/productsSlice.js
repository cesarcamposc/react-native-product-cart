import { createSlice } from "@reduxjs/toolkit";
import products from "../data/product";

const initialState = {
    products: products,
    selectedProducts : null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectedProducts:(state,action) => {
            console.log('state', state);
            console.log('action', action);

        }
    },
});