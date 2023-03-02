import React from "react";
import { Image, ImageBackground,View ,Text} from "react-native";

import { homeStyle } from "../../style/homeStyle/HomeStyle";

const CustomImage = ({source , discounts,customImageStyle}) =>{
    return (
       <ImageBackground imageStyle={{borderTopLeftRadius :15,borderBottomLeftRadius:15 ,backgroundColor:'red'}} blurRadius={2} source = {{uri :source}} style={[homeStyle.homeDishImageStyle,customImageStyle]}>
            {
                discounts ? null : (
                    <View style={[homeStyle.homeDiscountView]}>
                    <Text style = {[homeStyle.homeTextDiscountStyle]}>30% OFF</Text>
                    <Text style ={[homeStyle.homeTextDiscountStyle,{fontSize:16}]}> up to 75</Text>
                </View>
                )
            }
       </ImageBackground>
    )
}
export default CustomImage;