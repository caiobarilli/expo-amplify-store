import React from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import { useCart } from '@/hooks/use-cart'

export default function CartScreen() {
  const { cartItems, removeFromCart, updateProductQuantity } = useCart()

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>R${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            onPress={() => updateProductQuantity(item.id, item.quantity - 1)}
          />
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <Button
            title="+"
            onPress={() => updateProductQuantity(item.id, item.quantity + 1)}
          />
        </View>
        <Button
          title="Remove"
          onPress={() => removeFromCart(item.id)}
          color="#f00"
        />
      </View>
    </View>
  )

  const calculateTotal = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: R${calculateTotal()}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
