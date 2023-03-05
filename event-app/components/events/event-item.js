import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EventItem = ({id, name, body, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Event', {eventId: id, name, body, qrCode})}>
            <View><Text style={{fontSize: 28, color: 'white'}}>{name}</Text></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
        backgroundColor: 'purple'
    }
})

export default EventItem;