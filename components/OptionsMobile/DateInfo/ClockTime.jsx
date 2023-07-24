import {View,Text} from 'react-native';
import styles from './stylesClock.js';
export default function ShowCurrentDateAndTime (){
    const today= new Date()
    const requiredTime= new Intl.DateTimeFormat("es-AR",{
        dateStyle:'short'
    })

    return(
        <View style={styles.dayInformation}>
            <Text style={styles.textInfoDate}>
                {requiredTime.format(today)}
            </Text>
            <View style={[styles.timeIndicator,{backgroundColor:'#03c04a'}]}>
            </View>
        </View>
    )
}