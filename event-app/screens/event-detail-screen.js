import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements'

const EventDetailScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { eventId, title, body, qrCode } = route.params
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: title,
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
            <Text style={{fontSize:40}}>Event Detail {eventId}</Text>
            <Text style={{fontSize:30}}>{title}</Text>
            <Text style={{fontSize:20}}>{body}</Text>
            <Image 
                style={{width:100, height:100}}
                source={{ uri: qrCode }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default EventDetailScreen;