import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default function Calendar() {
  return (
    <ScrollView>
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          February 2024
        </Text>
        <View style={styles.week}>
          <Text style={styles.sign}>&lt;</Text>
          <View>
            <Text style={styles.weekText}>Mon</Text>
            <Text style={styles.weekTex}>26</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Tue</Text>
            <Text style={styles.weekTex}>27</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Wed</Text>
            <Text style={styles.weekTex}>28</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Thu</Text>
            <Text style={styles.weekTex}>29</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Fri</Text>
            <Text style={styles.weekTex}>1</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Sat</Text>
            <Text style={styles.weekTex}>2</Text>
          </View>
          <View>
            <Text style={styles.weekText}>Sun</Text>
            <Text style={styles.weekTex}>3</Text>
          </View>
          <Text style={styles.sign}> &gt;</Text>
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
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#293c4f',
    height: 150
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginTop: 25,
    marginBottom: 20
  },
  container5: {
    marginLeft: 30,
    marginRight: 30,
    borderLeftColor: '#293c4f', 
    borderLeftWidth: 5,
    marginBottom: 15,
    backgroundColor: '#dddddd',
    marginTop: 10,
    paddingBottom:20

  },
  text5: {
    fontSize: 27,
    marginBottom: 16,
    paddingLeft: 20,
    paddingTop: 10
  },
  text6: {
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 20,

  },
  text7: {
    paddingLeft: 20
  },
  text8: {
    paddingRight: 15,
    
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    
  },
  text9: {
    paddingRight: 15,
    fontSize: 20,
    marginBottom:55
  },
  week: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,

  },
  weekText: {
    paddingHorizontal: 10,
    color: 'white'
  },
  weekTex:{
    color: 'white',
    paddingLeft:16
  },
  sign: {
    color: "white",
    fontSize: 40,
    marginLeft: 25,
    marginRight: 25
  },
  line:{
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom:10,
    marginLeft:20,
    marginRight:20
  }
})