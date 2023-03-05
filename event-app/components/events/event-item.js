import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const EventItem = ({id, name, body, qrCode}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Event', {eventId: id, name, body, qrCode})}>
            <Text style={{fontSize: 32, color: 'white'}}>{name}</Text>           
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