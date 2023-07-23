import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { getAllVehiculos,vehiculoUpdate } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function GiveMeYourLocation (){
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
           // console.log(data)
        }
    },[])
    const [driverLocation,setDriverLocation]=useState(null)
    useEffect(()=>{
        ( async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
              console.log('Permission to access location was denied')
            } else {
              const locationSubscription = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.Highest,
                    timeInterval: 1000,
                    distanceInterval: 1,
              }, (location) => {
                setDriverLocation(location)
                console.log('New location update: ' + location.coords.latitude + ', ' + location.coords.longitude)
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