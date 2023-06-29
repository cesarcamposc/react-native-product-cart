import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}> 200,00</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}> 100,00</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.texBold}>Total</Text>
            <Text style={styles.texBold}> 400,00</Text>
        </View>
    </View>

);

const ShoppingCart = () => {
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