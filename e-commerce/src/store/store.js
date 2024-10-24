import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
const { configureStore } = require("@reduxjs/toolkit");

 const store = configureStore({
    reducer : {
        auth: authReducer
         
    }
    // 
 })

 export default store;