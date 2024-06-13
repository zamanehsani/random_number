
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'; 

export interface StateType {
    user_name?: string; 
    isAuthenticated?: boolean;
  }

const initialState:StateType = {
    user_name: "",
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
        
        .addCase(logout.fulfilled, (state)=>{
            state.isAuthenticated = false;
            state.user_name = "";
        })
        .addCase(logout.pending, (state)=>{
            state.isAuthenticated = false;
        })
        .addCase(logout.rejected, (state)=>{
            state.isAuthenticated = false;
        })

    }
});

export const login = createAsyncThunk(
    'auth/login',
    async (name:string) => {
        // const response = await axios.post("loginUrl", credentials);
        return name;
    }
);


export const logout = createAsyncThunk(
    'auth/logout',
    async () => { return null;}
);

export default authSlice.reducer;
