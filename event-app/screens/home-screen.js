import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import EventList from '../components/events/event-list';
import { useEffect, useState } from 'react';
const HomeScreen = () => {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)
    const handleRefresh = () => {
        console.log('refreshing...')
        setRefresh(prevState => !prevState)
    }
    useEffect(()=> {
        fetchData()
    }, [refresh])

    const fetchData = async() => {
        let data;
        try {
            const response = await fetch('https://af2f-110-44-120-204.in.ngrok.io/events/')
            data = await response.json()
            setData(data)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NewEvent')}>
                <Text style={{color: 'white', fontSize: 22, textAlign: 'center'}}>Add New Event</Text>
            </TouchableOpacity> 
            <EventList data={data} onRefresh={handleRefresh} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    },
    btn: {
        marginBottom: 10,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'purple'
    }
})
export default HomeScreen;