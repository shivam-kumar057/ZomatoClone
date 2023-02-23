import React from "react";
import { StyleSheet ,View ,SafeAreaView ,Text ,StatusBar} from "react-native";
import { HeaderComponent } from "../component/Common/HeaderComponent";

const DeliveryScreen = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
             <StatusBar
                animated={true}
                backgroundColor="white"
              />
            <HeaderComponent 
              isSearch
              isMicro={true}
            />

        </SafeAreaView>
    )
}
export default DeliveryScreen;