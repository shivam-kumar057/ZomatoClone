import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const homeStyle = StyleSheet.create({
    searchContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        height: 45,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: { width: -0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 3,
        flexDirection: 'row',
        elevation:4
    },
    foodSelectionCOntainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        padding: 10
    },
    hotelText: {
        fontSize: 14,
        left: 10,
        color:'black'
    },
    microPhoneContainer: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    seperator: {
        height: 30,
        width: 1,
        backgroundColor: 'gray'
    },
    headerContainer: {
        flexDirection: 'row',
    },
    locationContainer: {
        height: 60,
        width: 2 * windowWidth / 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    locationHeaderText: {
        fontSize: 20,
        fontWeight: '800',
        color:'black'
    },
    userInfoContainer: {
        height: 60,
        width: windowWidth / 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    languageSelectionContainer: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: -0.5,
            height: 0.5
        },
        shadowOpacity: 0.2,
        shadowColor: 'black',
        elevation:4,
        shadowRadius: 3,
    }

})