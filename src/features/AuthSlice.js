import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
}


const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        signIn:(state, action)=>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {signIn, logout} = authSlice.actions;
export default authSlice.reducer;
