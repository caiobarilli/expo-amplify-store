import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="cart"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
          title: 'Cart',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person"
              size={28}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}
