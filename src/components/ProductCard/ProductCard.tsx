import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../../context/CartContext';
import { Styles } from './ProductCard.styles';
import { useTheme } from '../../context/ThemeContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₱{product.price}</Text>

      <Pressable style={styles.button} onPress={onAddToCart}>
        <Icon name="cart-outline" size={20} color={colors.text} />
      </Pressable>
    </View>
  );
};

export default ProductCard;