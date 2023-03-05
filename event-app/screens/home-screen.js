import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import EventList from '../components/events/event-list';
import { useEffect, useState } from 'react';
const HomeScreen = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        let data;
        try {
            const response = await fetch('https://3b77-110-44-125-15.in.ngrok.io/events/')
            data = await response.json()
            setData(data)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <EventList data={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default HomeScreen;