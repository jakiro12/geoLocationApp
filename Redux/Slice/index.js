import {createSlice, dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
// import { ROUTE }  from '@env';
const ROUTE = "https://back-end-geo-location-production.up.railway.app/api";


export const userSlice = createSlice({
    name : "VEHICULOS",
    initialState : {
        allVehiculos: [],
        allLineas:[],
        AllVehiculosFiltered:[],
        Vehiculo:[],
    },
    reducers:{
        getAllVehiculos(state,action){
            state.allVehiculos = action.payload
            state.AllVehiculosFiltered = action.payload
        },
        //------------------Admin-------------------
        getVehiculoByName(state,action){
            state.AllVehiculosFiltered = action.payload
        },
        vehiculoCreate(state, action){
            state.Vehiculo = [...state.Vehiculo, action.payload]
        },
        vehiculoUpdate(state, action){
            state.Vehiculo = action.payload
        },
    }
});

export const getAllVehiculos = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE +"/vehiculos")
        dispatch(userSlice.actions.getAllVehiculos(json.data))

    } catch (e) {
        console.log(e)
    }
};
//------------------Admin-------------------
export const getVehiculoByName = (name)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE+"/vehiculos/"+name.toLowerCase())
        //  let productWithStock = json.data.filter((prod)=> prod.stock > 0)
        dispatch(userSlice.actions.getVehiculoByName (json.data))

    } catch (e) {
        console.log(e)
    }
};
export const vehiculoCreate = (vehiculo)=> async(dispatch) => {
    try {
        await axios.post(ROUTE +"/vehiculos", vehiculo);
    } catch (e) {
        alert(!e.response.data.error ? e.response.data : e.response.data.error)
    };
};
export const vehiculoUpdate = (vehiculo)=> async() => {
    try {
        console.log(vehiculo)
        await axios.put(ROUTE+"/vehiculos/update", vehiculo)
    } catch (e) {
        console.log(e)
    }
};




export const {} =userSlice.actions;

export default userSlice.reducer;