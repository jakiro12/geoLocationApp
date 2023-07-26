import {View,Text, ScrollView,TouchableOpacity} from 'react-native'
import styles from './styleRoutes.js';
import { useNavigation } from '@react-navigation/native';
export default function DisplayTheRouteOfEachBus(){
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10,}} >
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_1')}>
                    <Text style={styles.textLineDescription}>Linea 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_11')}>
                    <Text style={styles.textLineDescription}>Linea 11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_21')}>
                    <Text style={styles.textLineDescription}>Linea 21</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_23')}>
                    <Text style={styles.textLineDescription}>Linea 23</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_44')}>
                    <Text style={styles.textLineDescription}>Linea 44</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_52')}>
                    <Text style={styles.textLineDescription}>Linea 52</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_123')}>
                    <Text style={styles.textLineDescription}>Linea 123</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}