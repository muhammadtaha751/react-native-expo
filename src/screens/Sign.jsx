import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Sign({ navigation, toggleLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    // if (!email.trim() || !password.trim()) {
    //   Alert.alert('Error', 'Please fill in all fields.');
    //   return;
    // }
    const userData = {
      email,
      password
    };
    axios.post("http://192.168.1.36:8000/login-user", userData).then(res => {
      console.log(res.data);
      if (res.data.status == "ok") {
        Alert.alert('Logged in successfully')
        navigation.navigate('Account')
      }
      toggleLogin()

    })
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://www.vision6.com/wp-content/uploads/2020/02/12083526/recaptcha-2-protect.png"
            }}
          />
          <Text style={styles.text}>Welcome !</Text>
          <Text style={styles.tex}>Please sign in to continue</Text>
          <TextInput
            style={styles.input}
            placeholder='Your Email'
            onChangeText={e => setEmail(e)}
          />
          <TextInput
            style={styles.input}
            placeholder='Your Password'
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
          />
          <View >
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.save}>Login</Text>
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
  },
  tex: {
    fontSize: 20,
    paddingBottom: 30
  },
  container: {
    backgroundColor: "#ededed",
    height: 890,
    paddingTop: 80,
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
  tinyLogo: {
    width: 300,
    height: 300,
    marginBottom: 35,
    color: "white"
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