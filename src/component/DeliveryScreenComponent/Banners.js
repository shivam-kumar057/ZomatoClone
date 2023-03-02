import React from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import ExploreFood from "./ExploreFood";
import HomeType from "./HomeType";
import RecommendedFood from "./RecommendedFood";
import { RecommendedText } from "./RecommendedText";
import HotalComponent from "./HotelComponent";

const Banners = ({ data ,hotelName , ExploreFoods }) => {
   console.log("data==", data)
   const renderItem = () => {
      return (
         <>
            <View style ={{marginTop:5}}>
               <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItemList}
                  // horizontal={true}
                  showsHorizontalScrollIndicator={false}
               />
            </View>
            <RecommendedText
               text ={'Recommended For You'}
             />
            <RecommendedFood 
              hotelName={hotelName}
            />
            <RecommendedText
              text={'EXPLORE'}
             />
              <ExploreFood 
                  ExploreFoods={ExploreFoods}
              />
            <RecommendedText
              text={'WHAT ON YOUR MIND'}
             />
             <HotalComponent />
         </>
      )
   }
   const renderItemList = ({ item }) => {
      return (
         <HomeType type={item.type} />
      )
   }
   return (
      <ScrollView style={{ flex: 1 }}>
         {renderItem()}
      </ScrollView>
   )
}

export default Banners