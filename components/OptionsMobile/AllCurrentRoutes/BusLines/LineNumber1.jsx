import MapView,{ Polyline} from 'react-native-maps'
import { View } from 'react-native'
import styles from './stylesForAll.js';
import { routeForEveryBus } from '../CoordsForRoutes/coordRoutes.js';
export default function BusLine1 (){
    return(
        <View style={styles.contianer}>
            <MapView
   style={styles.mapContainer}
   initialRegion={{
     latitude: routeForEveryBus['linea_1'].coordinates[0].latitude,
     longitude:  routeForEveryBus['linea_1'].coordinates[0].longitude,
     latitudeDelta: 0.02,
     longitudeDelta: 0.02,
   }}
   >
    <Polyline
    strokeWidth={6}
    strokeColor="green"
    coordinates={
        routeForEveryBus['linea_1'].coordinates
    }/>
 </MapView>
        </View>
    )
}