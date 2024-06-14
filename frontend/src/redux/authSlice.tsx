import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "../utils/types";

const initialState:StateType = {
    user_name: "",
    points:1000,
    isAuthenticated:false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(login.pending, (state)=>{
            state.isAuthenticated = false;
        })
        .addCase(login.fulfilled, (state, action)=>{
          state.isAuthenticated = true
          state.user_name = action.payload;
        })
        .addCase(login.rejected, (state)=>{
            state.isAuthenticated = false;
        })
    }
});

export const login = createAsyncThunk(
    'auth/login',
    async (name:string) => {return name;}
);

export default authSlice.reducer;
