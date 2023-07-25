import { View,Text,ActivityIndicator,ScrollView, TouchableOpacity } from "react-native";
import styles from './stylePositions.js';
import * as Location from 'expo-location'; // paquete de ubicacion, par amostrar el ping
import { useEffect,useState } from "react";
import MapView,{Marker, Polyline} from 'react-native-maps'
import { getVehiculoByName } from "../../../Redux/Slice/index.js";
import { useDispatch, useSelector } from "react-redux";
import { routeForEveryBus } from "../AllCurrentRoutes/CoordsForRoutes/coordRoutes.js";
export default function GetRealLocation (){
    const[userLocation,setUserLocation]=useState(null)
    const [line,setLine]=useState('linea_11')
    const data = useSelector((state) => state.VEHICULOS.AllVehiculosFiltered)
    const dispatch = useDispatch()
    useEffect(()=>{
      ( async () => {
          const { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            console.log('Permission to access location was denied')
          } else {
            const locationSubscription = await Location.watchPositionAsync({
                  accuracy: Location.Accuracy.BestForNavigation,
                  timeInterval: 3000,
                  distanceInterval: 5,
            }, (location) => {
              setUserLocation(location)
              dispatch(getVehiculoByName("Cronm"))
            })
          } return () => locationSubscription.remove()
        })()
  },[])

    return(
        <View style={styles.contanierMap}>
          <View style={styles.choseVehiculeContianer}>
              <ScrollView horizontal={true} style={styles.scrollLinesToChose} showsHorizontalScrollIndicator={false} decelerationRate={0.9} contentContainerStyle={{alignItems:'center',}}>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1}  onPress={()=>setLine('linea_11')}>
                  <Text style={styles.textLineChosen}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxLineOption} activeOpacity={1} onPress={()=>setLine('linea_123')}>
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
     coordinate={{
       latitude: userLocation.coords.latitude,
       longitude:userLocation.coords.longitude,
     }}
   />
   {data.latitude && (
   <Marker
    pinColor='#21'
     coordinate={{
      latitude:parseFloat(data.latitude),
      longitude:parseFloat(data.longitude)
     }}
   />)}
   
   <Polyline
   strokeWidth={6}
   strokeColor="green" 
    coordinates={
     routeForEveryBus[line]
    }
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

