import {View,Text} from 'react-native';
import styles from './stylesClock.js';
export default function ShowCurrentDateAndTime (){
    const today= new Date()
    const requiredTime= new Intl.DateTimeFormat("es-CR",{
        dateStyle:'short'
    })
    const hoursInTheZone = new Intl.DateTimeFormat("es-CR",{
        hour:'2-digit'
    })
    const hourInCostaRica=Number(hoursInTheZone.format(today))
    const hoursAviables=[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    return(
        <View style={styles.dayInformation}>
            <Text style={styles.textInfoDate}>
                {requiredTime.format(today)}
            </Text>
            <View style={[styles.timeIndicator,{backgroundColor: hoursAviables.includes(hourInCostaRica) ? '#03c04a' : '#FF0000' }]}>
            </View>
        </View>
    )
}