import {View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './stylesOptions.js';
import { useNavigation } from '@react-navigation/native';
import ShowCurrentDateAndTime from './DateInfo/ClockTime.jsx';

export default function SelectTheScreen (){
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.navbarContainer}>
              <ShowCurrentDateAndTime />
                <TouchableOpacity style={styles.btnTypeUser} onPress={()=>navigation.navigate('conductor')}>
                    <Image source={require('../imagesToDisplay/chofer.png')} style={styles.principalLogo}/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <Image source={require('../imagesToDisplay/colectivo.png')} style={styles.principalLogo} />
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.boxGrid}>
                <TouchableOpacity style={styles.boxIconOption} onPress={()=> navigation.navigate('ubicacion')}>
                    <Image source={require('../imagesToDisplay/moving.png')} style={styles.logosImg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxIconOption} onPress={()=> navigation.navigate('recorridos')}>
                    <Image source={require('../imagesToDisplay/routes.png')} style={styles.logosImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxGrid}>
                
                    <TouchableOpacity style={styles.boxIconOption} onPress={()=> navigation.navigate('ubicacion')}>
                            <Text>Lineas</Text>
                        </TouchableOpacity>
                    <View style={styles.boxIconOption}>
                        <Text>Ubicaciones mas frecuentes</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}