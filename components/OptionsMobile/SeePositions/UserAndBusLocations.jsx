import { View,Text,ActivityIndicator,ScrollView, TouchableOpacity } from "react-native";
import styles from './stylePositions.js';
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { useEffect,useState } from "react";
import MapView,{Marker} from 'react-native-maps'

export default function GetRealLocation (){
    const[userLocation,setUserLocation]=useState(null)
    const [line,setLine]=useState(null)

    useEffect(()=>{
      ( async () => {
          const { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            console.log('Permission to access location was denied')
          } else {
            const locationSubscription = await Location.watchPositionAsync({
                  accuracy: Location.Accuracy.BestForNavigation,
                  timeInterval: 1000,
                  distanceInterval: 3,
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
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1}  onPress={()=>setLine(11)}>
                  <Text style={styles.textLineChosen}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(123)}>
                  <Text style={styles.textLineChosen}>123</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(131)}>
                  <Text style={styles.textLineChosen}>131</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(21)}>
                  <Text style={styles.textLineChosen}>21</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(44)}>
                  <Text style={styles.textLineChosen}>44</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(52)}>
                  <Text style={styles.textLineChosen}>52</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(1)}>
                  <Text style={styles.textLineChosen}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine(1)}>
                  <Text style={styles.textLineChosen}>1</Text>
                </TouchableOpacity>
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
 </MapView>)
  || 
  <ActivityIndicator  size="large" color="#0000ff" />}
            <View style={styles.specialOptionsContainer}>
             <View>
              {
                line === null ? (
              <Text>Numero de linea</Text>
                ):
                <Text>Linea: {line}</Text>
              }
             </View>
             <View>
              <Text>Tiempo de espera</Text>
             </View>
            </View>
 </View>
    )
}

