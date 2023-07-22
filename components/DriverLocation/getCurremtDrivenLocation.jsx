import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { getAllVehiculos } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function GiveMeYourLocation (){
    const [driverLocation,setDriverLocation]=useState(null)
    const [xd,setxd]=useState(true)

    const dispatch = useDispatch()
    const data = useSelector((state) => state.VEHICULOS.allVehiculos)

    useEffect(()=>{
        if(xd){
            dispatch(getAllVehiculos())
            setxd(false)
            console.log(1)
        }
        if(data.length !== 0){
            console.log(data)
        }
        async function getLocationPermission() {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              // Los permisos de ubicación no fueron concedidos
              // Manejar el error o mostrar un mensaje al usuario
              return
            }
            // Los permisos de ubicación fueron concedidos
            // Hacer algo con la ubicación
            const coords= await Location.getCurrentPositionAsync({})
            setDriverLocation(coords)
          }
         getLocationPermission()
    },[driverLocation])
    return(
        <View>
            <Text>
                Activame la ubi perro
            </Text>
        </View>
    )
}