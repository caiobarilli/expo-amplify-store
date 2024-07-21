import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { StyleSheet, Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { signOut } = useAuthenticator(userSelector)
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Logout</Text>
    </Pressable>
  )
}

export default function TabConfigScreen() {
  return (
    <SafeAreaView>
      <SignOutButton />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 150,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
})
