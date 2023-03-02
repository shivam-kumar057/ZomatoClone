import React from 'react'
import { View, Text, FlatList , TouchableOpacity } from 'react-native'
import CustomImage from '../Common/CustomImage'
import { homeStyle } from "../../style/homeStyle/HomeStyle";

const ExploreFood = ({ExploreFoods}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={[homeStyle.exploreContainer]}>
                 <View style={{  }}>
                    <CustomImage
                        source={item.image}
                        discounts
                        customImageStyle={{height:70}}
                    />
                </View>
               <View style={{margin:10}}>
               <Text style={{alignSelf:'center'}}>{item.offer}</Text>
                <Text style={{fontSize:10,color:'blue',top:3,fontWeight:'bold'}}>{item.discount}</Text>
               </View>
            </TouchableOpacity>
        )
    }
    return (
       <View style={{marginTop:15}}>
           <FlatList
            data={ExploreFoods}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            // numColumns={2}
            horizontal ={true}
            showsHorizontalScrollIndicator={false}
        />
       </View>
    )
}

export default ExploreFood