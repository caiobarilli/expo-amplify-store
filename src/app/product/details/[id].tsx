import { useNavigation } from '@react-navigation/native'
import { useLocalSearchParams, Redirect } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, Image, StyleSheet } from 'react-native'

import ProductList from '@/components/ProductList'
import { useCart } from '@/hooks/use-cart'
import { allProducts } from '@/lib/mocks/products'

export default function DetailsScreen() {
  const { products } = allProducts.data
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()
  const product = products.find((product) => product.id === Number(id))

  const { products: all } = allProducts.data

  const {
    addToCart,
    isInCart,
    removeFromCart,
    updateProductQuantity,
    getItemQuantity,
  } = useCart()

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product) {
      navigation.setOptions({ title: product.title })
    }
    isInCart(product.id) && setQuantity(getItemQuantity(product.id))
  }, [isInCart, getItemQuantity, product, navigation])

  if (!product) {
    return <Redirect href="/404" />
  }

  const handleAddToCart = () => {
    addToCart(product)
    setQuantity(getItemQuantity(product.id))
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product.id)
    setQuantity(0)
  }

  const increaseQuantity = () => {
    const newQuantity = quantity + 1

    if (product.quantity >= newQuantity) {
      updateProductQuantity(product.id, newQuantity)
      setQuantity(newQuantity)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      updateProductQuantity(product.id, newQuantity)
      setQuantity(newQuantity)
    }
  }

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: `https://images.unsplash.com/${product.image}?fm=jpg&q=80&w=600&h=400`,
          }}
        />

        <Text style={styles.title}>{product.title}</Text>

        <View>
          <Text style={{ paddingLeft: 20 }}>Por: </Text>

          {product.quantity > 0 ? (
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 32,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              R${product.price.toFixed(2)}
            </Text>
          ) : (
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 32,
                fontWeight: 'bold',
                textDecorationLine: 'line-through',
              }}
            >
              R${product.price.toFixed(2)}
            </Text>
          )}
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {product.quantity > 0 && !isInCart(product.id) && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Quantidade: </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
              >
                <Button title="-" onPress={decreaseQuantity} />
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 18,
                  }}
                >
                  {quantity}
                </Text>
                <Button title="+" onPress={increaseQuantity} />
              </View>
            </View>
          )}

          <View>
            {isInCart(product.id) && product.quantity > 0 && (
              <>
                <View style={{ marginBottom: 10 }} />
                <Button
                  title="Ver carrinho"
                  onPress={() => navigation.navigate('cart' as never)}
                />
                <View style={{ marginBottom: 10 }} />
                <Button
                  title="Remover do carrinho"
                  onPress={handleRemoveFromCart}
                  color="#f00"
                />
              </>
            )}

            {!isInCart(product.id) && product.quantity > 0 && (
              <Button title="Adicionar ao carrinho" onPress={handleAddToCart} />
            )}
          </View>
        </View>

        {product.quantity === 0 && (
          <Text style={{ paddingLeft: 20, color: 'red' }}>
            Produto esgotado
          </Text>
        )}

        <View style={styles.infos}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
            {product.description}
          </Text>
        </View>

        <View style={styles.relatedContainer}>
          <ProductList title="     Veja também:" products={all} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '80%',
    padding: 20,
  },
  infos: {
    padding: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 400,
  },
  relatedContainer: {
    width: '100%',
    paddingVertical: 20,
  },
})
