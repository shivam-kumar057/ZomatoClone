import React from "react";
import { StyleSheet,View,Text, SafeAreaView } from "react-native";
import StackNavigation from './src/navigation/StackNavigation'

const App = () =>{
    return (
        <View style={{flex:1}}>
            <StackNavigation/>
        </View>
    )
}

export default App