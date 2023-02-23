import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { homeStyle } from "../../style/homeStyle/HomeStyle";

const SearchBox = ({ microPhone, onMicPress, onRestaurantSearch }) => {
    return (
        <View style={[homeStyle.searchContainer]}>
            <TouchableOpacity onPress={onRestaurantSearch} style={[homeStyle.mainContainer]}>
                <View style={[homeStyle.foodSelectionCOntainer]}>
                    <FontAwesome name={'search'} size={20} color={'red'} />
                    <Text style={[homeStyle.hotelText]}>Restourant name or a dish</Text>
                </View>
                {
                    microPhone && (
                        <View style={[homeStyle.microPhoneContainer]}>
                            <View style={[homeStyle.seperator]} />
                            <Feather onPress={onMicPress} name={'mic'} size={20} color={'red'} />
                        </View>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchBox