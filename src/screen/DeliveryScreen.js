import React,{useState} from "react";
import { StyleSheet ,View ,SafeAreaView ,Text ,StatusBar, FlatList,ScrollView} from "react-native";
import { HeaderComponent} from "../component/Common/HeaderComponent";
import Banners from "../component/DeliveryScreenComponent/Banners";
import  HomeType  from "../component/DeliveryScreenComponent/HomeType";
import { RecommendedText } from "../component/DeliveryScreenComponent/RecommendedText";
import { hotalName ,ExploreFood } from "../json/DeliveryScreenJson/RecommendedJson";
let data = [
  {id:1,type :'veg'},
  {id:2,type : 'non veg'},
  {id:3,type :'filter'},
  {id:4,type :'Nearest'},
  {id:5,type :'Greate-offer'}
]

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
          <Banners
             data={data}
             hotelName = {hotalName}
             ExploreFoods = {ExploreFood}
             />  
        </SafeAreaView>
    )
}
export default DeliveryScreen;