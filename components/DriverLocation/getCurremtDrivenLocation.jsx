import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { vehiculoUpdate } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
////

export default function GiveMeYourLocation (){

    const dispatch = useDispatch()
    const data = useSelector((state) => state.VEHICULOS.allVehiculos)

    useEffect(()=>{
        ( async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            const x=0
            if (status !== 'granted') {
              console.log('Permission to access location was denied')
            } else {
              const locationSubscription = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.Highest,
                    timeInterval: 10000,
                    distanceInterval: 1,
              }, (location) => {
                dispatch(vehiculoUpdate({
                  "identificador":"Cronm",
                  "latitude":location.coords.latitude,
                  "longitude":location.coords.longitude
                }))
              })
            } return () => locationSubscription.remove()
          })()
    },[])




    return(
        <View>
            <Text>
                Activame la ubi perro
            </Text>
        </View>
    )
}