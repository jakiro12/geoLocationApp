import { View,Text,ActivityIndicator } from "react-native";
import styles from './stylePositions.js';
import * as Location from 'expo-location';
import { useEffect,useState } from "react";
import MapView,{Marker} from 'react-native-maps'

export default function GetRealLocation (){
    const[userLocation,setUserLocation]=useState(null)

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
          setUserLocation(coords)
        }
       getLocationPermission()
      },[])

    return(
        <View style={styles.contanierMap}>
             {userLocation && (
   <MapView
   style={styles.mapContainer}
   initialRegion={{
     latitude:userLocation.coords.latitude,
     longitude: userLocation.coords.longitude,
     latitudeDelta: 0.01,
     longitudeDelta: 0.01,
   }}
   onUserLocationChange={(e)=>{
    setUserLocation(
        {
            latitude:e.nativeEvent.coordinate.latitude,
            longitude:e.nativeEvent.coordinate.longitude
        }
    )
   }}
   >
   <Marker
    pinColor='#00ff00'
     coordinate={{
       latitude: userLocation.coords.latitude,
       longitude:userLocation.coords.longitude,
     }}
   />

 </MapView>)
  || 
  <ActivityIndicator  size="large" color="#0000ff" />}
            
 </View>
    )
}

