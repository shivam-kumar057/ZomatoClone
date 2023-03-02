import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'

const HomeType = ({type}) =>{
    return (
       <View style={{alignItems:'flex-start',left:5}}>
           <TouchableOpacity style = {{backgroundColor:'white',padding:10,borderRadius:10,margin:7,
            shadowOffset: {
                width: -0.5,
                height: 0.5
            },
            shadowOpacity: 0.2,
            shadowColor: 'black',
            elevation:4,
        }}>
            <Text allowFontScaling>{type} </Text>
        </TouchableOpacity>
       </View>
    )
}
export default HomeType