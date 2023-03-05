import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeStack, ProfileStack } from './stack';
import { StatusBar } from 'expo-status-bar';
import { Image, Linking, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props)=> {
        return (
          <SafeAreaView style={{flex: 1,
            backgroundColor: "purple",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
              <Image 
                source={require("../assets/favicon.png")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
              label={() => <Text style={{ color: '#fff' }}>More Info</Text>}
              onPress={()=> Linking.openURL('https://github.com/ishanshre')}
              icon={()=> (
                <Ionicons name="information" size={22} color="white" />
              )}
            />
          </SafeAreaView>
        )
      }}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          color: 'white'
        }
        }}>
      <Drawer.Screen name="HomeStack" 
      component={HomeStack} 
      options={{
        title: 'Home',
        drawerIcon: ()=> <Ionicons name="home" size={22} color="white" />
      }} 
      />
      <Drawer.Screen name="ProfileStack" 
      component={ProfileStack} 
      options={{
        title: 'Profile',
        drawerIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={22} color="white" />
        }}  
        />
    </Drawer.Navigator>
  );
}