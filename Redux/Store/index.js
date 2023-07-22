import {configureStore} from '@reduxjs/toolkit';
// import {combineReducers} from 'redux'; En caso de utilizar <1 reducer...
import userSlice from "../Slice/index.js";

const store =configureStore({
    reducer:{
        VEHICULOS : userSlice,
    }
})
export default store

