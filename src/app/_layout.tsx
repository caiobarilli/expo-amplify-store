import { Authenticator } from '@aws-amplify/ui-react-native'
import { Amplify } from 'aws-amplify'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'

import config from '@/aws-exports'
import { CartProvider } from '@/hooks/use-cart'

// Amplify configuration
Amplify.configure(config)

const AmplifyAuth: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <Authenticator.Provider>
    <Authenticator>{children}</Authenticator>
  </Authenticator.Provider>
)

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <AmplifyAuth>
      <CartProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="product/details/[id]"
            options={{
              headerShown: true,
              animation: 'slide_from_right',
              title: 'Product Details',
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </CartProvider>
    </AmplifyAuth>
  )
}
