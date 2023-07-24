import {StyleSheet} from 'react-native';

export default stylesForLocalTime=StyleSheet.create({
    dayInformation:{
        width:'45%',
        height:'80%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    textInfoDate:{
        fontSize:20
    },
    timeIndicator:{
        width:23,
        height:23,
        borderRadius:23,
        borderColor:'#000000',
        borderWidth:1
    }
})