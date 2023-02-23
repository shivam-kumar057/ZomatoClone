import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MoneyScreen from '../screen/MoneyScreen';
import DeliveryScreen from '../screen/DeliveryScreen';
import DinningScreen from '../screen/DinningScreen';
import GroceryScreen from '../screen/GroceryScreen';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (

    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarActiveTintColor:'black',
        headerShown: false,
        tabBarIcon: ({ focused,tintColor }) => {
          let iconname=''
          if(route.name ==="Delivery") {
              iconname='delivery-dining'
          }  else if (route.name==='Dinning') {
            iconname='fastfood'
          } else if (route.name==='Grocery') {
            iconname='food-bank'
          } else if (route.name ==='Money') {
            iconname='shopping-bag'
          }
          return(
            <MaterialIcons name={iconname} size={30} color={focused ? "red":'gray'} />
          )
        }
      })
    }
    >
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Dinning" component={DinningScreen} />
      <Tab.Screen name="Grocery" component={GroceryScreen} />
      <Tab.Screen name="Money" component={MoneyScreen} />
    </Tab.Navigator>

  )
}

export default TabNavigation