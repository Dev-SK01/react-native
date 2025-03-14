import ReactBasic from '../screens/ReactBasic'
import Registration from "@/screens/Registration";
import Login from '@/screens/Login'
import Dashboard from "@/screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ToDoApp from '@/screens/ToDoApp';
import firebase from 'firebase/auth'
import auth from '@/services/firebaseAuth';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function Index() {

  return ( 
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='basic' component={ReactBasic}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="register" component={Registration}/>
        <Stack.Screen name="dashboard" component={Dashboard}/>
        <Stack.Screen name="todo" component={ToDoApp}/>
      </Stack.Navigator>
  )
}




