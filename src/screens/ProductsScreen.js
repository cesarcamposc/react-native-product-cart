import { StyleSheet, Image, Text, View, FlatList, Pressable } from 'react-native';
import products from '../data/product';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';



const ProductsScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const products = useSelector(state=> state.products.products)

    return (
        <FlatList
            data={products}
            //keyExtractor={id}
            renderItem={({ item }) => (
                <Pressable
                onPress={()=>{
                    
                    dispatch(productsSlice.actions.selectedProducts(item.id));
                    
                    navigation.navigate('PRODUCT DETAILS')}}
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