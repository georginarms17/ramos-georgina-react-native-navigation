import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './HomeScreen.styles';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { addToCart } = useCart();
  const { toggle, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <FlatList
        key="two-columns"
        data={PRODUCTS}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => addToCart(item)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;