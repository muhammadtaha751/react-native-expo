import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, Pressable } from 'react-native';
import { create } from '../config/firebase';
import Sign from './Sign';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')

    function signup() {
        create(name, email, password, number)
        
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
                        textContentType="emailAddress"
                        autoCompleteType="email"
                        autoFocus={true}
                        autoCapitalize="none"
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
                    />
                    <Button
                        title='Sign up'
                        onPress={signup} />
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
        color: "#a9c6ea",
        backgroundColor: "white",
        fontSize: 20,
        width: 300,
        height: 50,
        marginBottom: 20,
    },
    para: {
        fontSize: 25,
        paddingBottom: 15
    }
});