import {View, Text, TouchableOpacity} from 'react-native';
import styles from './stylesOptions.js';
import { useNavigation } from '@react-navigation/native';

export default function SelectTheScreen (){
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Cabecera</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.boxGrid}>
                    <View style={styles.boxIconOption}>
                        <Text>
                            Vehiculo
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.boxIconOption} onPress={()=> navigation.navigate('recorridos')}>
                    <Text>
                        Recorridos
                    </Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.boxGrid}>
                
                    <TouchableOpacity style={styles.boxIconOption} onPress={()=> navigation.navigate('ubicacion')}>
                    <Text>
                  Ubicacion en vivo
                    </Text> 
                    </TouchableOpacity>
                    <View style={styles.boxIconOption}>
                        <Text>Ubicaciones mas frecuentes</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}