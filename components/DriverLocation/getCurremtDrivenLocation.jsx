import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping

export default function GiveMeYourLocation (){
    const [driverLocation,setDriverLocation]=useState(null)
    useEffect(()=>{
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
            console.log(status)
            console.log(coords)
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