import {useState} from 'react'
import { View ,Text, TextInput, Button ,StyleSheet} from 'react-native'

const Registration = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const handleRegistration = () => {
        console.log(email , password);
        
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.register}>Register</Text>
        <TextInput
          placeholder='Enter Email'
          style={styles.textInput}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          placeholder='Enter Password'
          secureTextEntry
          style={styles.textInput}
          onChangeText={setPassword}
        ></TextInput>
        <Button title='Register' onPress={handleRegistration}/>
        <Text style={{marginTop:5}}>Already registered ? Login</Text>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    register:{
       fontSize:20,
       fontWeight:'bold'
    },
    textInput:{
        borderWidth:1,
        borderColor:'grey',
        width:200,
        marginVertical:10,
        paddingHorizontal:10
    }
    
})