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
            <Text style={{color:'white', fontSize:20, paddingLeft: 5}}>Logo</Text>
        )
    }
}