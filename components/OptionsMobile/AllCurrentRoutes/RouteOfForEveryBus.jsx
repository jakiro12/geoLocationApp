import {View,Text, ScrollView,TouchableOpacity} from 'react-native'
import styles from './styleRoutes.js';
import { useNavigation } from '@react-navigation/native';
export default function DisplayTheRouteOfEachBus(){
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='never' contentContainerStyle={{alignItems:'center',paddingBottom:10,}} >
                <TouchableOpacity style={styles.boxBusOption}  onPress={()=> navigation.navigate('linea_1')}>
                    <Text style={styles.textLineDescription}>La Aurora - Santa Cecilia</Text>
                </TouchableOpacity>
              
            </ScrollView>
        </View>
    )
}