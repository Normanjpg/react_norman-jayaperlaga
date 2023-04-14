import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getProduct = createAsyncThunk('product/getProduct', async() => {
    const res = await axios.get (
        "https://643255f93e05ff8b372470ae.mockapi.io/products"
    );
    return res.data;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async(index) => {
    const res = await axios.delete(
        `https://643255f93e05ff8b372470ae.mockapi.io/products/${index}`
    );
    return res.data;
})