import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, Image, Alert } from 'react-native';
import { Login } from '../config/firebase';


export default function Sign() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function signin() {
    Login(email, password)
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
          <Button
            title="Login"
            color="#384979"
            style={styles.Button}
            onPress={signin}
          />
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
  },
  tinyLogo: {
    width: 300,
    height: 300,
    marginBottom: 35,
    color: "white"
  },

});