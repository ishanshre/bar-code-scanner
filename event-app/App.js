import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import 'react-native-gesture-handler';
import { MyDrawer } from './navigation/drawer';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer style={styles.global}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: 'purple',
  }
})


