import { View, Text, StyleSheet, Image, ScrollView, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Dashboard({ navigation }) {
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
                    <View style={styles.con}>
                        <MaterialCommunityIcons style={styles.logo} name="account" size={24} color="black" />
                        <Text style={styles.tex} onPress={() => navigation.navigate('Account')}>My Account</Text>
                    </View>
                    <View style={styles.con}>
                        <FontAwesome6 style={styles.logo} name="pen" size={24} color="black" />
                        <Text style={styles.tex}>My business</Text>
                    </View>
                    <View style={styles.con}>
                        <Ionicons style={styles.logo} name="notifications" size={24} color="black" />
                        <Text style={styles.tex}>My Notifications</Text>
                    </View>
                    <View style={styles.con}>
                        <MaterialIcons style={styles.logo} name="design-services" size={24} color="black" />
                        <Text onPress={() => navigation.navigate('Services')} style={styles.tex}>My Services</Text>
                    </View>
                    <View style={styles.con}>
                        <AntDesign style={styles.logo} name="dashboard" size={24} color="black" />
                        <Text  onPress={() => navigation.navigate('Statistics')} style={styles.tex}>My Statistics</Text>
                    </View>
                    <View style={styles.con}>
                        <MaterialIcons style={styles.logo} name="subscriptions" size={24} color="black" />
                        <Text style={styles.tex}>My Subscription</Text>
                    </View>
                    <View style={styles.cont}>
                        <MaterialIcons style={styles.logo} name="logout" size={24} color="black" />
                        <Text onPress={() => navigation.navigate('Register')} style={styles.te}>Logout</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
       flex:1,
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

    },
    tex: {
        fontSize: 25,
        color: 'white'
    },
    te: {
        fontSize: 25,
        color: 'white',
    },
    con: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
      

    },
    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 500,
     
    },
    container10:{
marginRight:150,
alignItems: 'center',
justifyContent:"center",
textAlign:'center',
flexDirection:"column"
    }
})