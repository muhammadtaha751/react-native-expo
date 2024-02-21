import { View, Text, Image, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Account({ navigation }) {
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_960_720.jpg',
                        }}
                    />
                    <Text style={styles.tex}>Update Pictue</Text>
                </View>
                <View>
                    <Text style={styles.text}>Business Name</Text>
                    <View style={styles.con}>
                        <Fontisto style={styles.logo} name="person" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Dashlytics' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.con}>
                        <Fontisto style={styles.logo} name="email" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='contact@gmail.com' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Phone Number</Text>
                    <View style={styles.con}>
                        <Feather style={styles.logo} name="phone" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='0332121789' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Website</Text>
                    <View style={styles.con}>
                        <Entypo style={styles.logo} name="dribbble-with-circle" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='www.dashlytics.com' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Address</Text>
                    <View style={styles.con}>
                        <Entypo style={styles.logo} name="home" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='New York,USA' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Description</Text>
                    <View style={styles.con}>
                        <MaterialIcons style={styles.logo} name="description" size={24} color="black" />
                        <TextInput style={styles.input} placeholder='Dashlytics is a mobile app based on react native' />
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button title='Save'
                        onPress={() => navigation.navigate('Dashboard')} />
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
        marginTop: 50
    },
    btn: {
        marginTop: 50
    },
    text: {
        marginLeft: 20,
        color: 'black',
        marginRight: 10,
        marginBottom: 10

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
        borderColor:'gray'
    },
    logo: {
        paddingLeft: 20,
        paddingRight: 10
    }

})