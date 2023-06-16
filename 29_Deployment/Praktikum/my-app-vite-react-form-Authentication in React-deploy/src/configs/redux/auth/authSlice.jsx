import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isLogin : false,
};

const authSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        login : (state, action) => {
            return {
                ...state,
                isLogin: action.payload,
            };
        },
    },
});

// export const {action = loginAction} = authSlice;
export default authSlice;