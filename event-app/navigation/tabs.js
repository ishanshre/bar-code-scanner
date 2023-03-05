import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/home-screen';
import { QrCodeScreen } from '../screens/qr-code-screen';

const Tab = createMaterialBottomTabNavigator();

export const HomeTab = ()=> {
  return (
    <Tab.Navigator
        barStyle={{ backgroundColor: 'purple' }}
        activeColor="black"
        inactiveColor="white"
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabel: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'Scan') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline'
                }
                return <Ionicons name={iconName} size={35} color={color} />
            }
        })}
    >
      <Tab.Screen name="HomeTabs" component={HomeScreen} options={{title:'Home'}} />
      <Tab.Screen name="Scan" component={QrCodeScreen} />
    </Tab.Navigator>
  );
}