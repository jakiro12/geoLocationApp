import MapView,{ Polyline} from 'react-native-maps'
import { View } from 'react-native'
import styles from './stylesForAll.js';
import { routeForEveryBus } from '../CoordsForRoutes/coordRoutes.js';
export default function BusLine52 (){
    return(
        <View style={styles.contianer}>
            <MapView
   style={styles.mapContainer}
   initialRegion={{
     latitude:-31.603635,
     longitude: -60.702508,
     latitudeDelta: 0.04,
     longitudeDelta: 0.04,
   }}
   >
    <Polyline
    strokeWidth={6}
    strokeColor="green"
    coordinates={
        routeForEveryBus['linea_52'].coordinates
    }/>
 </MapView>
        </View>
    )
}