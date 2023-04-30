// import { LOGIN_SUCCESS, LOGOUT } from "../actions/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const user = AsyncStorage.getItem("userDetails");
// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };
// export default auth = (state = initialState, action) => {
//   const { type, payload } = action;
// switch (type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//         user: payload.user,
//       };
// case LOGOUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        login:[],
    },
    reducers:{
        login : (state, action) => {
            const itemInLogin = state.login;
            if(itemInLogin){
                state.login.push({...action.payload})
            }
        },
        updateLogin : (state, action) => {
            const itemInLogin = state.login;
            if(itemInLogin){
                state.login.push({...action.payload})
            }
        },
        logout : (state,action) => {
            const removeFromLogin = [];
            state.login = removeFromLogin;
        }
    }
});


export const {login,logout, updateLogin} = loginSlice.actions;

export default loginSlice.reducer;