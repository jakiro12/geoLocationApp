import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { vehiculoUpdate,getAllVehiculos } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
////

export default function GiveMeYourLocation (){
    const dispatch = useDispatch()
    const data = useSelector((state) => state.VEHICULOS.allVehiculos)
    const [driverLocation,setDriverLocation]=useState({
        "identificador":"Cronm",
        latitude:"",
        longitude:"",}
    )
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
                setDriverLocation({
                  ...driverLocation,latitude:location.coords.latitude, longitude:location.coords.latitude
                })
                dispatch(vehiculoUpdate(driverLocation))
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