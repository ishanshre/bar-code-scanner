import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetailScreen from '../screens/event-detail-screen';
import HomeScreen from '../screens/home-screen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}