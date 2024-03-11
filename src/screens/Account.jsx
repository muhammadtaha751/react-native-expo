import { View, Text, Image, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CameraButton from '../components/CameraButton';
import { useState } from 'react';
import axios from 'axios';

export default function Account({ navigation,userId}) {
    const [picture,setPicture] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [web,setWeb] = useState('')
    const [address,setAddress] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = async () => {
        try {
          await axios.put(`http://192.168.1.36:8000/api/users/${userId}`,{
            name,
            email,
            number,
            picture,
            web,
            address,
            description
          });
          Alert.alert('Success', 'User details updated successfully!');
        } catch (error) {
          console.error('Error updating user details:', error.message);
          Alert.alert('Error', 'Failed to update user details. Please try again.');
        }
    
      };

    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <CameraButton />
                    <Text onChangeText={setPicture} style={styles.tex}>Update Pictue</Text>
                </View>
                <View>
                    <Text style={styles.text}>Business Name</Text>
                    <View style={styles.con}>
                        <Fontisto style={styles.logo} name="person" size={24} color="black" />
                        <TextInput onChangeText={setName} style={styles.input} placeholder='Dashlytics' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.con}>
                        <Fontisto style={styles.logo} name="email" size={24} color="black" />
                        <TextInput  onChangeText={setEmail} style={styles.input} placeholder='contact@gmail.com' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Phone Number</Text>
                    <View style={styles.con}>
                        <Feather style={styles.logo} name="phone" size={24} color="black" />
                        <TextInput  onChangeText={setNumber} style={styles.input}
                            placeholder='03321217890'
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Website</Text>
                    <View style={styles.con}>
                        <Entypo style={styles.logo} name="dribbble-with-circle" size={24} color="black" />
                        <TextInput  onChangeText={setWeb} style={styles.input} placeholder='www.dashlytics.com' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Address</Text>
                    <View style={styles.con}>
                        <Entypo style={styles.logo} name="home" size={24} color="black" />
                        <TextInput  onChangeText={setAddress} style={styles.input} placeholder='New York,USA' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Description</Text>
                    <View style={styles.con}>
                        <MaterialIcons style={styles.logo} name="description" size={24} color="black" />
                        <TextInput  onChangeText={setDescription} style={styles.input} placeholder='Dashlytics is a mobile app based on react native'
                            multiline
                            numberOfLines={2}
                        />
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.save}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 20
    },
    container: {
        alignItems: 'center',
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#293c4f',
        height: 40,
        width: 370,
        marginLeft: 20,
    },
    save: {
        color: 'white',
        fontSize: 20,
        paddingTop: 5,
    },
    text: {
        marginLeft: 20,
        color: 'black',
        marginRight: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 60
    },
    tex: {
        marginBottom: 20
    },
    con: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        padding: 8,
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 20,
        fontSize: 20
    },
    logo: {
        paddingLeft: 20,
        paddingRight: 10
    }
})