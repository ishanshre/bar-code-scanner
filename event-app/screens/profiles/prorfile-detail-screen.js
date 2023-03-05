import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'

const ProfileDetailScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { profileId } = route.params
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "profile title",
            headerLeft: ()=>(
                <HeaderBackButton
                    tintColor='white'
                    label='previous'
                    onPress={()=> navigation.goBack()}
                />
            ),
        })
    })
    return (
        <View style={styles.screen}>
            <Text style={{fontSize:40}}>Profile Detail {profileId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default ProfileDetailScreen;