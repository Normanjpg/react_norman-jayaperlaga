import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://643255f93e05ff8b372470ae.mockapi.io/products/";

export const retrieveProducts = createAsyncThunk(
	"products/retrieveProducts",
	async () => {
		const res = await axios.get(`${url}`);
        console.log(res);
		return res.data;
	}
);

export const addProducts = createAsyncThunk(
	"products/addProducts",
	async (param) => {
		const res = await axios.post(`${url}`, param);
		return res.data;
			
	}
);

export const deleteProducts = createAsyncThunk(
	"products/deleteProducts",
	async (id) => {
		const res = await axios.delete(`${url}${id}`);
		return res.data;
	}
);
export const updateProducts = createAsyncThunk(
	"products/updateProducts",
	async (param) => {
		const res = await axios.put(`${url}${param.id}`, param);
		return res.data;
	}
);

// export const getProduct = createAsyncThunk('product/getProduct', async() => {
//     const res = await axios.get (
//         "https://643255f93e05ff8b372470ae.mockapi.io/products"
//     );
//     return res.data;
// });

// export const deleteProduct = createAsyncThunk("product/deleteProduct", async(index) => {
//     const res = await axios.delete(
//         `https://643255f93e05ff8b372470ae.mockapi.io/products/${index}`
//     );
//     return res.data;
// })