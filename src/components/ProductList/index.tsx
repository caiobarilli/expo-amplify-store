import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

import ProductCard from '@/components/ProductCard'
import { CartProductProps } from '@/lib/types/cart'

interface ProductListProps {
  title: string
  products: CartProductProps[]
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: 10,
  },
})

export default ProductList
