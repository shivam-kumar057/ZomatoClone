import React from "react";
import { StyleSheet ,View,Text } from "react-native";

const RecommendedText = ({text}) =>{
    return (
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
            <View style={{height:1,width:100,backgroundColor:'gray'}}/>
            <Text>{text}</Text>
            <View style={{height:1,width:100,backgroundColor:'gray'}}/>
        </View>
    )
} 
export {RecommendedText}