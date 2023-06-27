import { StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import CartListItem from './src/components/CartListItem';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      {/* <ProductDetailsScreen/> */}
      <ShoppingCart/>
      {/* <CartListItem/> */}

            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },

});