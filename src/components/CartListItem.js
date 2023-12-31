import { StyleSheet, Text, View, Image } from 'react-native'
import {Feather} from '@expo/vector-icons'
import React from 'react'
import cart from '../data/cart'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'

const CartListItem = ({cartItem}) => {

    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId: cartItem.product.id,
            amount: 1,
        }));

    };

    const decreaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({
            productId: cartItem.product.id,
            amount: -1,
        }));

    }


    return (
        <View style = {styles.container}>
            <Image source={{uri : cartItem.product.image}} style = {styles.image} alt='mi_imagen'/>

            <View style = {styles.contentContainer}>
                <Text style = {styles.name}>{cartItem.product.name} </Text>
                <Text style = {styles.size}>Size: {cartItem.size} </Text>

                <View style = {styles.footer}>
                    <Feather 
                    onPress = {decreaseQuantity}
                    name = 'minus-circle'
                    size = {25}
                    color = 'gray'/>

                    <Text style = {styles.quantity}>{cartItem.quantity}</Text>

                    <Feather 
                    onPress = {increaseQuantity}
                    name = 'plus-circle'
                    size = {25}
                    color = 'gray' />

                    <Text style = {styles.itemTotal}>$ {cartItem.product.price * cartItem.quantity}</Text>
                </View>                
            </View>           
        </View>
    )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        paddingHorizontal: 20,
    },

    contentContainer:{
        flex : 1,
        marginLeft: 10,
    },

    image : {
        width: '40%',
        aspectRatio: 1,
    },

    name: {
        fontWeight: '500',
        fontSize: 20,
    },

    size: {
        fontSize: 18,
        color: 'gray'
    },

    footer: {
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },

    quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'gray',
    },

    itemTotal: {
        fontSize: 18,
        marginLeft: 'auto',
        fontWeight: '500'
    }
})