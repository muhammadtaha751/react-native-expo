import { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';

export default function Subscription(){
    const [name,setName] = useState('Subscription') 

    return(
        <View style={styles.container}>
        <Text style={styles.text}>
        {name}
        </Text>
    </View>
    )
   
}

const styles = StyleSheet.create({
container:{
    alignItems:'center',
    justifyContent:'center'
},
text:{
    color:'black',
    fontSize:40
}
})