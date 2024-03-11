import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Services({ navigation }) {
    const [selectedOption, setSelectedOption] = useState('Today');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const renderData = () => {
        if (selectedOption === 'Today') {
            return <View><View style={styles.container3}>
                <Text style={styles.text4}>In progress</Text>
                <Text style={styles.text4}>To Do</Text>
                <Text style={styles.text4}>Done</Text>
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
                    <View style={styles.line}></View>
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
                    <View style={styles.line}></View>
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
                    <View style={styles.line}></View>
                    <View style={styles.container4}>
                        <Text style={styles.text7}>01/01/2023-13:00</Text>
                        <Text style={styles.text8}>60min</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('Calendar')}>
                        <Text style={styles.save}>See my calendar</Text>
                    </TouchableOpacity>
                </View>
            </View>;
        } else if (selectedOption === 'This Week') {
            return <View><View style={styles.container3}>
                <Text style={styles.text4}>In progress</Text>
                <Text style={styles.text4}>To Do</Text>
                <Text style={styles.text4}>Done</Text>
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
                    <View style={styles.line}></View>
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
                    <View style={styles.line}></View>
                    <View style={styles.container4}>
                        <Text style={styles.text7}>01/01/2023-13:00</Text>
                        <Text style={styles.text8}>60min</Text>
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
                    <View style={styles.line}></View>
                    <View style={styles.container4}>
                        <Text style={styles.text7}>01/01/2023-10:00</Text>
                        <Text style={styles.text8}>30min</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Business')}>
                        <Text style={styles.save}>See my Business</Text>
                    </TouchableOpacity>
                </View>
            </View>;
        }
    };
    return (
        <ScrollView>
            <View>
                <View style={styles.parent}>
                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === 'Today' && styles.selectedOption]}
                        onPress={() => handleOptionSelect('Today')}>
                        <Text style={styles.optionText}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === 'This Week' && styles.selectedOption]}
                        onPress={() => handleOptionSelect('This Week')}>
                        <Text style={styles.optionText2}>This Week</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {renderData()}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#293c4f',
flex:1,
flexDirection:'row',
justifyContent:'space-around',
height:60
    },
    optionText: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        paddingTop:10
    },
    optionText2: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        paddingTop:10
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
        borderLeftColor: '#293c4f',
        borderLeftWidth: 5,
        marginBottom: 15,
        backgroundColor: '#dddddd',
        paddingBottom: 20
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
        fontSize: 18,
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

    },
    text9: {
        paddingRight: 15,
        fontSize: 20,
        marginBottom: 55
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#293c4f',
        height: 40,
        width: 370,
        marginLeft: 20,
        marginTop: 70
    },
    save: {
        color: 'white',
        fontSize: 20,
        paddingTop: 5
    },
})