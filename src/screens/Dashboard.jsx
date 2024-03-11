import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; 


export default function Dashboard({ navigation,}) {

    const handleLogout = async () => {
    
        try {
          // Clear user authentication data from local storage
          await AsyncStorage.removeItem('authToken');
          // Redirect user to the sign-in screen or any other appropriate action
          navigation.navigate('Home');
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_960_720.jpg',
                        }}
                    />
                    <Text style={styles.text}>John Doe</Text>
                </View>
                <View style={styles.container10} >
                    <View >
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Account')}>
                            <MaterialCommunityIcons style={styles.logo} name="account" size={24} color="black" />
                            <Text style={styles.tex} >My Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Business')}>
                            <MaterialCommunityIcons style={styles.logo} name="pencil-plus" size={24} color="black" />
                            <Text style={styles.tex}>My Business</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Notification')}>
                        <Ionicons style={styles.logo} name="notifications" size={24} color="black" />
                            <Text style={styles.tex}>My Notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Services')}>
                        <FontAwesome5 style={styles.logo} name="servicestack" size={24} color="black" />
                            <Text style={styles.tex}>My Services</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Statistics')}>
                            <MaterialCommunityIcons style={styles.logo} name="pencil-plus" size={24} color="black" />
                            <Text style={styles.tex}>My Statistics</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.con} onPress={() => navigation.navigate('Subscription')}>
                        <MaterialIcons style={styles.logo}  name="subscriptions" size={24} color="black" />
                            <Text style={styles.tex}>My Subscription</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.cont} onPress={handleLogout}>
                        <MaterialCommunityIcons  style={styles.logo} name="logout" size={24} color="black" />
                            <Text  style={styles.te}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#293c4f',
    },
    tinyLogo: {
        marginTop: 80,
        width: 120,
        height: 120,
        borderRadius: 100
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 50
    },
    logo: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 10,
        marginVertical: 10,
        marginRight: 10,

    },
    tex: {
        fontSize: 20,
        color: 'white'
    },
    te: {
        fontSize: 20,
        color: 'white',
    },
    con: {
        flexDirection: 'row',
        alignItems:'center',
        width:280
      
    },
    cont: {
        flexDirection: 'row',
        alignItems: 'center',
       marginBottom:280,
       width:280
    },
    container10: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:30
    }
})