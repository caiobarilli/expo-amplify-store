import AsyncStorage from '@react-native-async-storage/async-storage'
import { act, renderHook } from '@testing-library/react-native'

import { CartProvider, useCart } from '@/hooks/use-cart'

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}))

const exampleProduct = {
  id: 1,
  title: 'Smartphone Samsung Galaxy A72',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 1999.99,
  image: 'photo-1676121228785-f1dcd462025f',
  quantity: 0,
}

describe('CartProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('adds item to cart', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(exampleProduct)
    })

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'CartProducts',
      JSON.stringify([exampleProduct]),
    )
  })

  it('removes item from cart', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(exampleProduct)
      result.current.removeFromCart(1)
    })

    expect(AsyncStorage.setItem).toHaveBeenCalledWith('CartProducts', '[]')
  })

  it('lists all items from cart', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(exampleProduct)
    })

    expect(result.current.cartItems).toStrictEqual([exampleProduct])
  })
})
