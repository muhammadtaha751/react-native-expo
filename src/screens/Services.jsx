import { View, Text, Image, StyleSheet, Button,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Services({navigation}) {
    return (
        <ScrollView>
        <View>
            <View style={styles.contain}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_960_720.jpg',
                            }}
                        />
                        <Text style={styles.text}>John Doe</Text>
                    </View>
                    <AntDesign style={styles.logo} name="menufold" size={24} color="black" />
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text2}>Today</Text>
                    <Text style={styles.text3}>This Week</Text>
                </View>
            </View>

            <View>
                <View style={styles.container3}>
                    <Text style={styles.text4}>In progress</Text>
                    <Text style={styles.text4}>To Do</Text>
                    <Text style={styles.text4}>Done</Text>
                </View>
            </View>

            <View style={styles.container5}>
                <View style={styles.container4}>
                    <View>
                        <Text style={styles.text5}>Shaving</Text>
                        <Text style={styles.text6}>John Doe</Text>
                    </View>
                    <View>
                        <Text style={styles.text9}>$30</Text>
                    </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text7}>01/01/2023-10:00</Text>
                    <Text style={styles.text8}>30min</Text>
                </View>
            </View>

            <View style={styles.container5}>
                <View style={styles.container4}>
                    <View>
                        <Text style={styles.text5}>Make-up</Text>
                        <Text style={styles.text6}>Michelle Doe</Text>
                    </View>
                    <View>
                        <Text style={styles.text9}>$20</Text>
                    </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text7}>01/01/2023-12:00</Text>
                    <Text style={styles.text8}>30min</Text>
                </View>
            </View>

            <View style={styles.container5}>
                <View style={styles.container4}>
                    <View>
                        <Text style={styles.text5}>Nail care</Text>
                        <Text style={styles.text6}>Lessie Buffington</Text>
                    </View>
                    <View>
                        <Text style={styles.text9}>$85</Text>
                    </View>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.text7}>01/01/2023-13:00</Text>
                    <Text style={styles.text8}>60min</Text>
                </View>
            </View>

            <View style={styles.btn}>
                <Button title='See my calendar'
                onPress={()=> navigation.navigate('Calendar')} />
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#293c4f',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 20
    },
    text: {
        fontSize: 23,
        color: 'white'
    },
    logo: {
        color: 'white'
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        marginBottom: 20
    },
    text2: {
        color: 'white',
        fontSize: 25
    },
    text3: {
        color: 'white',
        fontSize: 25
    },
    text4: {
        fontSize: 20,
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    container5: {
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        marginBottom: 15,
        backgroundColor: '#dddddd'

    },
    text5: {
        fontSize: 27,
        marginBottom: 16,
        paddingLeft: 20,
        paddingTop: 10
    },
    text6: {
        fontSize: 23,
        marginBottom: 20,
        paddingLeft: 20,

    },
    btn: {
        marginTop: 30
    },
    text7: {
        paddingLeft: 20
    },
    text8: {
        paddingRight: 15,
        paddingBottom: 20
    },
    text9: {
        paddingRight: 15,
        fontSize: 20,
    }


})