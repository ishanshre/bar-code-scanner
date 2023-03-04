import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

const EventDetailScreen = () => {
    const route = useRoute()
    const { eventId, title, body } = route.params
    return (
        <View style={styles.screen}>
            <Text style={{fontSize:40}}>Event Detail {eventId}</Text>
            <Text style={{fontSize:30}}>{title}</Text>
            <Text style={{fontSize:20}}>{body}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default EventDetailScreen;