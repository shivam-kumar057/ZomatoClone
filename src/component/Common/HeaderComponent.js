import React from "react";
import { View, Text, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { homeStyle } from "../../style/homeStyle/HomeStyle";
import SearchBox from "./SearchBox";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderComponent = ({ isSearch ,isMicro ,onMicPress}) => {
    return (
        <>
            <View style={homeStyle.headerContainer}>
                <View style={[homeStyle.locationContainer]}>
                    <MaterialIcons name={'location-pin'} size={35} color={'red'} />
                    <View>
                        <Text style={[homeStyle.locationHeaderText]}>Block G </Text>
                        <Text style={{ fontSize: 12 }}>Palam Extension , palam , New Delhi</Text>
                    </View>
                </View>
                <View style={[homeStyle.userInfoContainer]}>
                    <View style={[homeStyle.languageSelectionContainer]}>
                        <FontAwesome name={'language'} size={25} color={'black'} />
                    </View>
                    <FontAwesome name={'user-circle-o'} size={40} color={'lightgray'} />
                </View>
            </View>

            {
                isSearch && (
                   <SearchBox 
                      microPhone = {isMicro ? true :false}
                      onMicPress={onMicPress}
                   />
                )
            }

        </>
    )
}

export { HeaderComponent }


