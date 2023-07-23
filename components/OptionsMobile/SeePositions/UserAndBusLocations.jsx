import { View,Text,ActivityIndicator,ScrollView } from "react-native";
import styles from './stylePositions.js';
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { useEffect,useState } from "react";
import MapView,{Marker} from 'react-native-maps'

export default function GetRealLocation (){
    const[userLocation,setUserLocation]=useState(null)

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
              setUserLocation(location)
              console.log('New location update: ' + location.coords.latitude + ', ' + location.coords.longitude)
            })
          } return () => locationSubscription.remove()
        })()
  },[])

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

