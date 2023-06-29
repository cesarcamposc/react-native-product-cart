import { View, Text, FlatList, ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import product from '../data/product';

const ProductDetailsScreen = () => {

    const product1 = product[0];
    return (
        <View>

            <ScrollView>
                <FlatList
                    data={product1.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: 300, aspectRatio: 1 }} />

                    )}
                    horizontal
                />

                <View style= {{padding: 20 }}>
                    {/* Title */}
                    <Text style = {styles.titleProduct}>{product1.name}</Text>

                    {/* Price */}
                    <Text style = {styles.price}>${product1.price}</Text>

                    {/* Description */}
                    <Text style = {styles.description}>{product1.description}</Text>
                </View>
            </ScrollView>

            {/* card Button  */}
            <Pressable style= {styles.button}>
                <Text style = {styles.buttonText}> ADD CART</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    titleProduct: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 15,
    },

    price: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1.5,
    },

    description: {
        fontSize: 20,
        fontWeight: '300',
        marginVertical: 10,
        lineHeight:25,
    },

    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 50,
        width: '80%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',    
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }

})

export default ProductDetailsScreen