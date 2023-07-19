import { View,Text,StatusBar,TouchableOpacity} from "react-native";
import styles from './stylesForLandingPage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectTheScreen from "./OptionsMobile/OptionsAviable";
import GetRealLocation from "./OptionsMobile/SeePositions/UserAndBusLocations";
import DisplayTheRouteOfEachBus from "./OptionsMobile/AllCurrentRoutes/RouteOfForEveryBus";
import BusLine1 from "./OptionsMobile/AllCurrentRoutes/BusLines/LineNumber1";

function StartApp ({navigation}){
    return(
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
        <TouchableOpacity style={styles.jumpBtn} activeOpacity={1} onPress={()=>navigation.navigate('opciones')}>
        <Text>
                Bienvenido a la app
            </Text>
        </TouchableOpacity>
            
        </View>
    )
}

const Stack =createNativeStackNavigator();

export default function SheeTInformationAbout (){
    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name='inicio' component={StartApp} />
                    <Stack.Screen name='opciones' component={SelectTheScreen} />
                    <Stack.Screen name="ubicacion" component={GetRealLocation} />
                    <Stack.Screen name='recorridos' component={DisplayTheRouteOfEachBus}/>
                    <Stack.Screen name='linea1' component={BusLine1}/>
                </Stack.Navigator>
        </NavigationContainer>
    )
}