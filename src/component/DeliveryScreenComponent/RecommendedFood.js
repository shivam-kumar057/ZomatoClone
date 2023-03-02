import React from 'react'
import { View, Text, FlatList , TouchableOpacity } from 'react-native'
import CustomImage from '../Common/CustomImage'
import { homeStyle } from "../../style/homeStyle/HomeStyle";

const RecommendedFood = ({hotelName}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={[homeStyle.homeSpecialDishContainer]}>
                <View style={{ width: '50%', height: 90 }}>
                    <CustomImage
                        source={item.hotalDishUrl}
                    />
                </View>
                <View style={[homeStyle.hotelNameStyle]}>
                    <Text>{item.special}</Text>
                    <Text>{item.DeliveryTime}</Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (
       <View style={{marginTop:15}}>
           <FlatList
            data={hotelName}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={2}
        />
       </View>
    )
}

export default RecommendedFood