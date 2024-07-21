import { useRouter } from 'expo-router'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { CartProductProps } from '@/lib/types/cart'

interface ProductCardProps {
  product: CartProductProps
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter()

  const handlePress = () => {
    router.push({
      pathname: 'product/details/[id]',
      params: { id: product.id },
    })
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.image}
          source={{
            uri: `https://images.unsplash.com/${product.image}?fm=jpg&q=60&w=200`,
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
  },
  content: {
    padding: 10,
    paddingTop: 0,
  },
  title: {
    fontSize: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    margin: 0,
    marginBottom: 10,
  },
})

export default ProductCard
