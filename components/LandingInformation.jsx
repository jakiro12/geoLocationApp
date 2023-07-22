import { View,Text,StatusBar,TouchableOpacity, Animated} from "react-native";
import styles from './stylesForLandingPage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectTheScreen from "./OptionsMobile/OptionsAviable";
import GetRealLocation from "./OptionsMobile/SeePositions/UserAndBusLocations";
import DisplayTheRouteOfEachBus from "./OptionsMobile/AllCurrentRoutes/RouteOfForEveryBus";
import BusLine1 from "./OptionsMobile/AllCurrentRoutes/BusLines/LineNumber1";
import { useEffect,useRef } from "react";
import GiveMeYourLocation from "./DriverLocation/getCurremtDrivenLocation";

function StartApp ({navigation}){
    const translateY = useRef(new Animated.Value(-200)).current;
    const opacity = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);
  
    const animatedStyles = {
      transform: [{ translateY }],
      opacity,
    };
  
    useEffect(()=>{
        const timeToGetIn = setTimeout(() => {
            navigation.navigate('opciones')
          }, 4000);      
          return () => clearTimeout(timeToGetIn);
    },[])
    return(
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
        <Animated.View style={[animatedStyles]}>
        <View style={styles.jumpBtn}  >
             <Text style={styles.textIntroName}>
               ChapiBus
            </Text>
        </View>
        </Animated.View>
            
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
                    <Stack.Screen name='conductor' component={GiveMeYourLocation}/>

                </Stack.Navigator>
        </NavigationContainer>
    )
}