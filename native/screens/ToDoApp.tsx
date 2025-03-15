import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'


const ToDoApp = () => {

    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                TODO APP
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Enter Task'
                    style={styles.input}
                />
                <Button title='Add' />
            </View>
            <View style={styles.taskContainer}>
                <Text>Task Number 1 Task Number 1</Text>
                <Button title='Edit' />
                <Button title='Delete' />
            </View>
            <View style={styles.taskContainer}>
                <Text>Task Number 1 Task Number 1</Text>
                <Button title='Edit' />
                <Button title='Delete' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    taskContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        marginVertical:25,
        backgroundColor:'white',
        padding:10,
        textAlign:'center'
    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 25,
        backgroundColor: "white",
        width: '90%',
        paddingVertical: 3,
        borderRadius: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 4
    }
});

export default ToDoApp;