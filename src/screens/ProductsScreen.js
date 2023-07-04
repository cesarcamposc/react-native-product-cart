import { StyleSheet, Image, Text, View, FlatList, Pressable } from 'react-native';
import products from '../data/product';
import { useSelector } from 'react-redux';


const ProductsScreen = ({navigation}) => {

    const products = useSelector(state=> state.products.products)

    return (
        <FlatList
            data={products}
            //keyExtractor={id}
            renderItem={({ item }) => (
                <Pressable
                onPress={()=>navigation.navigate('PRODUCT DETAILS')}
                style={styles.itemContainer}                
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </Pressable>
                
            )}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
      
    itemContainer: {
      width: '50%',
      padding: 2,
    },
  
    image: {
      width: '100%',
      aspectRatio: 1,
    },
  
  });

  export default ProductsScreen