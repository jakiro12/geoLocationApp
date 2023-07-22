import { View,Text,ActivityIndicator,ScrollView } from "react-native";
import styles from './stylePositions.js';
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
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
          console.log(status)
          console.log(coords)
        }
       getLocationPermission()
      },[userLocation])

    return(
        <View style={styles.contanierMap}>
          <View style={styles.choseVehiculeContianer}>
              <ScrollView horizontal={true} style={styles.scrollLinesToChose} showsHorizontalScrollIndicator={false} decelerationRate={0.9} contentContainerStyle={{alignItems:'center',}}>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
                <View style={styles.boxLineOption}>
                  <Text style={styles.textLineChosen}>1</Text>
                </View>
              </ScrollView>
          </View> 
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
   <Marker
    pinColor='#00ff00'
     coordinate={{
       latitude: parseFloat("-31.690700"),
       longitude: parseFloat("-60.767386"),
     }}
   />

 </MapView>)
  || 
  <ActivityIndicator  size="large" color="#0000ff" />}
            <View style={styles.specialOptionsContainer}>
              <Text>
                Descripcion del vehiculo y tiempo
              </Text>
            </View>
 </View>
    )
}

