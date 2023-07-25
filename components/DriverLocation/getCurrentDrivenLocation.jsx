import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { vehiculoUpdate } from "../../Redux/Slice";
import { useDispatch } from "react-redux";
////

export default function GiveMeYourLocation (){
    const dispatch = useDispatch()

    useEffect(()=>{
        ( async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
              console.log('Permission to access location was denied')
            } else {
              const locationSubscription = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation, //mejor precision para navegaciones
                    timeInterval: 5000, // cada 5 seg
                    distanceInterval: 15, // cada 15 metros
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