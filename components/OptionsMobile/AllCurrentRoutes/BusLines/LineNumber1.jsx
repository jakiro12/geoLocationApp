import MapView,{MapPolyline, Marker, Polygon, Polyline} from 'react-native-maps'
import { View } from 'react-native'
import styles from './stylesForAll.js';
export default function BusLine1 (){
    return(
        <View style={styles.contianer}>
            <MapView
   style={styles.mapContainer}
   initialRegion={{
     latitude:9.171377,
     longitude: -83.335979,
     latitudeDelta: 0.01,
     longitudeDelta: 0.01,
   }}
   >
   <Marker
    pinColor='#00ff00' 
     coordinate={{
       latitude: 9.170853,
       longitude:-83.331446,
     }}
   />
    <Marker
    pinColor='#00ff00' 
     coordinate={{
       latitude: 9.172212,
       longitude:-83.334995,
     }}
   />
   <Marker
    pinColor='#00ff00'
     coordinate={{
       latitude: 9.171377,
       longitude:-83.335979,  //9.172212, -83.334995
     }}
   />
    <Polyline
    strokeWidth={4}
    strokeColor="green"
    coordinates={
        [{
            latitude: 9.170853,
            longitude:-83.331446,
          },{
            latitude: 9.172212,
            longitude:-83.334995,
          },
          {
            latitude: 9.171377,
            longitude:-83.335979,
          }

        ]
    }/>
    
 </MapView>
        </View>
    )
}