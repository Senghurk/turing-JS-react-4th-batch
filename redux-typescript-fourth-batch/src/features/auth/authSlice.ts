import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Movie, movieSlice} from "../movies/movieSlice";

import {login} from "./authApi";
import {RootState} from "../../app/store";

export interface AuthUser {
    token?:string;
}
export interface User {
    username:string,
    password:string,
}
const initialState:AuthUser= {

};
export const apiLogin = createAsyncThunk(
    'auth/login',
    async (user:User) => {
        console.log("API save movie");
        const response = await login(user.username,user.password);
        console.log("login user json ",response.data);
        return response.data;
    }
);
export const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers:{
        logout:(state) =>{

            state.token =undefined;
        },
    },
    extraReducers:(builder) => {
        builder
            .addCase(apiLogin.fulfilled, (state, action)=> {
                console.log("Api fullfilled ",action.payload);
                if(action.payload.token)
                {
                    state.token = action.payload.token;
                }

            });


    }
});
export const {logout} = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;