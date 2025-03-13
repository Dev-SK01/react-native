import { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { signInWithEmailAndPassword ,onAuthStateChanged } from 'firebase/auth'
import auth from '../services/firebaseAuth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState()

  const handleRegistration = () => {
    setError(undefined);
    if (!email && !password) {
      console.log('Enter Email or Password');

    } else {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("dashboard"))
        .catch((error) => { 
          setError(error.message);
        });
    }
  }

 const navigateRegister = ()=>{
   navigation.navigate("register")
 }

 useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
    if(user) navigation.navigate('dashboard')
   })
 },[])
  return (
    <View style={styles.container}>
      <Text style={styles.register}>LOGIN</Text>
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
      <Button title='Login' onPress={handleRegistration} />
      <Text style={{ marginTop: 5 }} onPress={navigateRegister}>Create an Account ? Register</Text>
    </View>
  )
}

export default Login

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