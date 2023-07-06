import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProductsScreen from './screens/ProductsScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ShoppingCart from './screens/ShoppingCart'

import {FontAwesome} from '@expo/vector-icons'

import { useSelector } from 'react-redux'
import { selectNumbersOfItems } from './store/cartSlice'

const Stack = createNativeStackNavigator();

const navigation = () => {

  const numberOfItems = useSelector(selectNumbersOfItems);

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name ="PRODUCTS" 
            component={ProductsScreen}
            options={({navigation})=>({
                headerRight: ()=>
                <Pressable 
                onPress={()=>navigation.navigate('CART')} style = {{flexDirection: 'row'}}>
                    <FontAwesome name='shopping-cart' size={25}/>
                    <Text style ={{marginLeft: 5,fontWeight:'500', fontSize: 20}}>{numberOfItems}</Text>
                </Pressable>})} />
                    
            <Stack.Screen 
            name ="PRODUCT DETAILS" 
            component={ProductDetailsScreen} 
            options={{presentation: 'modal'}} />
            <Stack.Screen name ="CART" component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation