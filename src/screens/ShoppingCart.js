import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice';

const ShoppingCartTotals = () => {

    const subtotal = useSelector(selectSubtotal);
    const deliveryFree = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return(
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}> {subtotal}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}> {deliveryFree}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.texBold}>Total</Text>
                <Text style={styles.texBold}>{total}</Text>
            </View>
        </View>
    )
};

const ShoppingCart = () => {

    const cartItems = useSelector(state => state.cart.items);
    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    );
};

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'blue',
        borderTopWidth: 1,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },

    text: {
        fontSize: 16,
        color: 'gray',
    },

    texBold: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '500',
    },

    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 50,
        width: '80%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
})