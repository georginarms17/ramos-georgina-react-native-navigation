import React from 'react';
import { View, Text, FlatList, Pressable, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { Styles } from './CartScreen.styles';

const CartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { items, increaseQty, decreaseQty, toggleSelection, selectedTotal, hasSelectedItems } = useCart();
  const { colors } = useTheme();
  const styles = Styles(colors);

  const handleCheckout = () => {
    if (!hasSelectedItems) {
      Alert.alert('No Items Selected', 'Please select items to checkout');
      return;
    }
    navigation.navigate('Checkout');
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Pressable 
        onPress={() => toggleSelection(item.id)}
        style={styles.checkbox}
      >
        <Ionicons
          name={item.selected ? 'checkbox' : 'square-outline'}
          size={24}
          color={colors.accent}
        />
      </Pressable>

      <Image source={item.image} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>

        <View style={styles.quantityContainer}>
          <Pressable 
            style={styles.quantityButton}
            onPress={() => decreaseQty(item.id)}
          >
            <Ionicons name="remove" size={20} color={colors.text} />
          </Pressable>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <Pressable 
            style={styles.quantityButton}
            onPress={() => increaseQty(item.id)}
          >
            <Ionicons name="add" size={20} color={colors.text} />
          </Pressable>
        </View>

        <Text style={styles.subtotal}>
          Subtotal: ₱{(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  if (items.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Ionicons name="cart-outline" size={100} color={colors.text} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <Pressable 
          style={styles.shopButton}
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })}
        >
          <Text style={styles.shopButtonText}>Start Shopping</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Selected Items Total:</Text>
          <Text style={styles.totalAmount}>₱{selectedTotal.toFixed(2)}</Text>
        </View>

        <Pressable
          style={[
            styles.checkoutButton,
            !hasSelectedItems && styles.checkoutButtonDisabled
          ]}
          onPress={handleCheckout}
          disabled={!hasSelectedItems}
        >
          <Ionicons name="card" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.checkoutButtonText}>
            Checkout {hasSelectedItems ? `(${items.filter(i => i.selected).length})` : ''}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;