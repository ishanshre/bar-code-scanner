import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"
export const navOptions = (nav) => {
    return {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: "purple",
        },
        headerRight: () => (
            <Ionicons 
                name="menu"
                size={32}
                color="white"
                onPress={()=> nav.toggleDrawer()}
            ></Ionicons>
        ),
        headerLeft: () => (
            <Ionicons name="home" size={22} color="white" paddingRight={5}/>
            
        )
    }
}