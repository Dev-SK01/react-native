import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../services/firebaseAuth';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';

const Registration = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState()

  const handleRegistration = () => {
    setError(undefined);
    if (!email && !password) {
      console.log('Enter Email or Password');

    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("dashboard"))
        .catch((error) => {
          setError(error.message);
        });
    }
  }

  const navigateLogin = () =>{
    navigation.navigate("login")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.register}>REGISTER</Text>
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
      {error && <Text style={{color:'red',fontWeight:'bold'}}>{error} </Text>}
      <Button title='Register' onPress={handleRegistration} />
      <Text style={{ marginTop: 5 }} onPress={navigateLogin}>Already registered ? Login</Text>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  register: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
    marginVertical: 10,
    paddingHorizontal: 10
  }

});