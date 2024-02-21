import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import StatsLineGraph from '../components/StatsLineGraph'
import Circle from '../components/Circle';
import RadioButtons from '../components/RadioButtons';


export default function Statistics() {
    const data = [50, 70, 60, 90, 80, 110, 100];
    return (
        <ScrollView>
            <View>
                <View style={styles.container2}>
                    <Text style={styles.text}>My earnings</Text>
                    <Text style={styles.text2}>My reports</Text>
                </View>
                <Text style={styles.text2}>Your report during this period</Text>
                <View style={styles.container}>

                    <StatsLineGraph
                        data={data}
                        width={300}
                        height={280}
                    />
                </View>
                <Text style={styles.text2}>People have seen your profile</Text>
                <View style={styles.circle}>
                <Circle diameter={200} color="#293c4f" />
                <View>
                    <RadioButtons/>
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 20,
        height:50
    },
    text: {
        fontSize: 20
    },
    text2: {
        fontSize: 20,
        marginBottom:20
    },
circle:{
    marginTop:50,
    marginLeft:30,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-around'
}
});