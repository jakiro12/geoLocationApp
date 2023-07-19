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
       latitude: 9.172054, 
       longitude:-83.333672,
     }}
   />

   <Marker
    pinColor='#00ff00'
     coordinate={{   
       latitude: 9.171355,
       longitude:-83.335539,  
     }}
   />
    <Polyline
    strokeWidth={4}
    strokeColor="green"
    coordinates={
        [{   
          latitude: 9.171355,
          longitude:-83.335539,  
        },
        {
          latitude: 9.172266,  //9.172266, -83.335421
          longitude:-83.335421,
        },
        {
          latitude: 9.172054, 
          longitude:-83.333672,
        }  

        ]
    }/>
    
 </MapView>
        </View>
    )
}