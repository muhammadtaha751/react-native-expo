import { View, Text,StyleSheet, } from 'react-native';

export default function Calendar(){
  return(
    <View>
      <View style={styles.container}>
      <Text style={styles.text}>
        April 2024
      </Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'#293c4f',
    height:150
  },
  text:{
   fontSize:30,
   color:'white',
   marginTop:25
  },
  container5: {
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    marginBottom: 15,
    backgroundColor: '#dddddd',
    marginTop:10

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
text7: {
  paddingLeft: 20
},
text8: {
  paddingRight: 15,
  paddingBottom: 20
},
container4: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: "center",
},
text9: {
  paddingRight: 15,
  fontSize: 20,
}
})