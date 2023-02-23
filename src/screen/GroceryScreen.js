import React from "react";
import { StyleSheet ,View ,SafeAreaView ,Text } from "react-native";
import { HeaderComponent } from "../component/Common/HeaderComponent";

const GroceryScreen = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'orange'}}>
             <HeaderComponent />
        </SafeAreaView>
    )
}
export default GroceryScreen;