import { useState, } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function Business(){
    const [name,setName] = useState('Business')  

    function change(){
        setName('Trade')
    }
    return(
        <View style={styles.container}>
        <Text style={styles.text}>
        {name}
        </Text>
        <TouchableOpacity onPress={change}>
            <Text>Press me</Text>
        </TouchableOpacity>
    </View>
    )
   
}

const styles = StyleSheet.create({
container:{
  flex:1,
    alignItems:'center',
    justifyContent:'center'
},
text:{
    color:'black',
    fontSize:40
}
})