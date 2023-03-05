import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetailScreen from '../screens/event-detail-screen';
import NewEventScreen from '../screens/new-event-screen';
import ProfileScreen from '../screens/profiles/profiles-screen';
import ProfileDetailScreen from '../screens/profiles/prorfile-detail-screen';
import { navOptions } from './options';
import { HomeTab } from './tabs';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
      <Stack.Screen name="NewEvent" component={NewEventScreen} />
    </Stack.Navigator>
  );
}

export const ProfileStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Profiles" component={ProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}