import MapView,{ Marker,Polyline} from 'react-native-maps'
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
   identifier='salida'
    pinColor='#ff0000'  
     coordinate={{
       latitude: 9.171355, 
       longitude:-83.335539,
     }}
   />

   <Marker
    pinColor='#ff0000'
     coordinate={{   
       latitude: 9.176998,
       longitude:-83.332926,  
     }}
   />
    <Polyline
    strokeWidth={6}
    strokeColor="green"
    coordinates={
        [{   
          latitude: 9.171355,
          longitude:-83.335539,  
        },
        {
          latitude: 9.172266,  
          longitude:-83.335421,
        },
        {
          latitude: 9.172054, 
          longitude:-83.333672, 
        },
        {
          latitude: 9.176998,  
          longitude:-83.332926,
        }

        ]
    }/>
    
 </MapView>
        </View>
    )
}