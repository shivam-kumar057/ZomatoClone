import React from "react";
import { StyleSheet ,View,Text,TouchableOpacity } from "react-native";
import { homeStyle } from "../../style/homeStyle/HomeStyle";
import HotelImageComponent from "../Common/HotelImageComponent";

const HotalComponent = () => {
    return ( 
        <TouchableOpacity style={[homeStyle.hotelContainer]}>
            <View style={[homeStyle.hotelMainContainer]}>
                <HotelImageComponent/>
            </View>
        </TouchableOpacity>
    )
}

export default HotalComponent;