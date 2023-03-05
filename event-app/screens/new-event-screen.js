import { useState } from "react";
import { TextInput, View, Button, StyleSheet, Text } from "react-native";
import { HeaderBackButton } from '@react-navigation/elements'
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';

const NewEventScreen = () => {
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState(new Date())
    const navigation = useNavigation()
    const [alert, setAlert] = useState({
        isVisible: false,
        msg: ''
    })

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "Add New Event",
            headerLeft: ()=>(
                <HeaderBackButton
                    tintColor='white'
                    label='previous'
                    onPress={()=> navigation.goBack()}
                />
            ),
        })
    }, [])

    const handleAddEvent = async() => {
        const d = date.toISOString().slice(0,10)
        console.log(d)
        const data = {
            name,
            body,
            date: d,
        }
        try {
            const resposne = await fetch("https://af2f-110-44-120-204.in.ngrok.io/events/", {
                method: "POST",
                headers: {
                    'Content-Type':"application/json",
                },
                body: JSON.stringify(data)
            })
            const res = await Response.json()
        } catch (error) {
            console.log(error)
        }
        setAlert({isVisible: true, msg:"event added"})
    }
    return (
        <View style={styles.screen}>
            {alert.isVisible && <Text>{alert.msg}</Text>}
            <TextInput 
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input}
            />
            <TextInput 
                value={body}
                onChangeText={setBody}
                placeholder="Description"
                style={styles.input}
            />
            <TextInput 
                value={date.toLocaleString()}
                onChangeText={setDate}
                placeholder="Date"
                style={styles.input}
            />
            <Button onPress={handleAddEvent} title="Add" />
        </View>
    );
    
}

const styles = StyleSheet.create({
    screen :{
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
    }
})
export default NewEventScreen