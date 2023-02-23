import React from "react";
import { StyleSheet ,View ,SafeAreaView ,Text } from "react-native";
import { HeaderComponent } from "../component/Common/HeaderComponent";

const DinningScreen = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'gray'}}>
            <HeaderComponent />
        </SafeAreaView>
    )
}
export default DinningScreen;