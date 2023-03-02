import React from "react";
import { Image, ImageBackground, View, Text } from "react-native";
import { homeStyle } from "../../style/homeStyle/HomeStyle";

const HotelImageComponent = ({ source, discounts, customImageStyle }) => {
    return (
        <ImageBackground imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: '#262626' }} blurRadius={2} source={{ uri: source }} style={[homeStyle.hotelMainContainer, customImageStyle]}>
            <View style={{ height: 45, width: '95%', backgroundColor: 'blue', borderRadius: 25, position: 'absolute', bottom: -23, alignSelf: 'center' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                <View style={{ alignSelf: 'flex-start', borderColor: 'gray', borderWidth: 1, borderRadius: 5, justifyContent: 'center', padding: 5 }}>
                    <Text style={{color:'white'}}>hfjrhjhewjhjhfhgjhgjsjhsdfghshfshbjf</Text>

                </View>
                <Text style={{color:'white'}}>heart</Text>
            </View>
            <View style={{ position:'absolute',bottom:30,flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:20,alignItems:'center',padding:10 }}>
                <View>
                <Text style={{fontSize:25,color:'white'}}>hfdns</Text>
                <Text style={{color:'white'}}>hfhjsdhjadbjhfs</Text>
                </View>
                <View style={{height:30,width:50,backgroundColor:'green',borderRadius:10,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',paddingHorizontal:10}}>
                     <Text style={{color:'white'}}>4.2</Text>
                     <Text style={{color:'white'}}>*</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
export default HotelImageComponent;