import { ScrollView, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ProductList from '@/components/ProductList'
import { newsProducts, bestSellersProducts } from '@/lib/mocks/products'

const HomeScreen = () => {
  const { products: news } = newsProducts.data
  const { products: top } = bestSellersProducts.data

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ProductList title="Novidade" products={news} />
          <ProductList title="Mais vendidos" products={top} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    padding: 10,
  },
})

export default HomeScreen
