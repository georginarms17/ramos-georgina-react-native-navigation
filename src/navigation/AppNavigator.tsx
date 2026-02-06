import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { CartProvider, useCart } from '../context/CartContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { isDark, toggle, colors } = useTheme();
  const { items } = useCart();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerRight: () => (
            <>
              <Pressable onPress={toggle} style={{ marginHorizontal: 10 }}>
                <Icon
                  name={isDark ? 'sunny' : 'moon'}
                  size={20}
                  color={colors.text}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Cart')} style={{ marginHorizontal: 10 }}>
                <Icon name="cart" size={20} color={colors.text} />
                {items.length > 0 && (
                  <View style={{
                    position: 'absolute',
                    right: -6,
                    top: -3,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>
                      {items.length}
                    </Text>
                  </View>
                )}
              </Pressable>
            </>
          ),
        })}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default AppNavigator;