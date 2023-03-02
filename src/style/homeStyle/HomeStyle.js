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
    },
    homeSpecialDishContainer: {
        height: 100,
        width: windowWidth / 2.1,
        borderRadius: 10, margin: 5,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        shadowOffset: { width: -0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 3,
        elevation:3
    },
    hotelNameStyle : {
        width: '50%', 
        height: 90, 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    homeDishImageStyle: {
        height: 90,
        width: '100%',
        justifyContent: 'flex-end'
    },
    homeTextDiscountStyle: {
        fontSize: 17,
        color: 'white',
        fontWeight: '700'
    },
    homeDiscountView: {
        bottom: 5,
        alignSelf: 'center'
    },
    exploreContainer :{
        height:120,
        width:100,
        shadowOffset: { width: -0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 3,
        borderRadius: 15,
        backgroundColor:'white',
        margin:5,
        elevation:3
    },
    hotelContainer : {
        height:windowHeight/2.8,
        width:windowWidth*0.95,
        shadowOffset: { width: -0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 3,
        borderRadius: 15,
        backgroundColor:'white',
        alignSelf:'center',
        elevation:3
    },
    hotelMainContainer : {
        width:windowWidth*0.95,
        height :windowHeight/4.3,
        backgroundColor:'blue',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
       
    }


})