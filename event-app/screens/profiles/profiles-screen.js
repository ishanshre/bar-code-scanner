import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native"
const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>Profiles Screen</Text>
            <Button title="Some profile" onPress={()=> navigation.navigate('Profile', {profileId: 1})} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default ProfileScreen;