import { StyleSheet } from "react-native";
// los ootros colores son: 0a32eb ff8300
export default stylesGridOptions=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ffB400',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerContainer:{
        width:'90%',
        height:'25%',
        borderRadius:10,
        overflow:'hidden'
    },
    bodyContainer:{
        width:'90%',
        height:'60%',
        display:'flex'
    },
    boxGrid:{
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    boxIconOption:{
        width:'45%',
        height:'80%',
        borderColor:'#ffffff',
        borderWidth:2,
        borderRadius:10,
    },
    navbarContainer:{
        width:'100%',
        height:'8%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#03AEE7'
    },
    btnTypeUser:{
        width:'20%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    principalLogo:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch',
    },
    logosImg:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch',
        tintColor:'#000000'
    },
})