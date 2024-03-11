import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, Pressable, TouchableOpacity, Alert } from 'react-native';
import Sign from './Sign';
import axios from 'axios';

export default function Register({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')

    function handleRegister() {
        // if (!name.trim() || !email.trim() || !password.trim() || !number.trim()) {
        //     Alert.alert('Error', 'Please fill in all fields.');
        //     return;
        // }

        const userData = {
            name: name,
            email,
            number,
            password
        }
        axios.post("http://192.168.1.36:8000/register", userData)
            .then(res => {
                console.log(res.data);
                if (res.data.status == "ok") {
                    Alert.alert("registered Successfully")
                } else {
                    Alert.alert(res.data)
                }
            })
            .catch(e => console.log(e))
        navigation.navigate('Sign')
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.container}>

                    <Text style={styles.text}>
                        Lets get started !
                    </Text>
                    <Text style={styles.para}>
                        create an account to avail all the features
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Your Name'
                        onChangeText={e => setName(e)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Your Email'
                        onChangeText={e => setEmail(e)}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoFocus={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Your Password'
                        secureTextEntry={true}
                        onChangeText={e => setPassword(e)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Your Phone number'
                        onChangeText={e => setNumber(e)}
                        keyboardType="numeric"
                        value={number}
                    />
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                            <Text style={styles.save}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: '700',
        padding: 20,
    },
    container: {
        backgroundColor: "#ededed",
        height: 890,
        paddingTop: 120,
        paddingLeft: 50,
        paddingRight: 50,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    para: {
        fontSize: 25,
        paddingBottom: 15
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#293c4f',
        height: 35,
        width: 310,

    },
    save: {
        color: 'white',
        fontSize: 20,
        paddingTop: 5
    },
});