import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native'


const ToDoApp = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editTask, setEditTask] = useState(-1);

    const addTask = () => {
        if (task) {
            if (editTask !== -1) {
                taskList[editTask] = task;
                setTaskList(taskList);
                setEditTask(-1);
            } else {
                setTaskList([...taskList, task])
            }
        }
        setTask("");
    }
    const editTasks = (index: number) => {
        const taskToEdit: string = taskList[index];
        setTask(taskToEdit);
        setEditTask(index);
    }

    const deleteTask = (index: number) => {
        const updated = [...taskList];
        updated.splice(index, 1)
        setTaskList(updated);
    }

    const renderTask = ({ item, index }) => {
        return (
            <View style={styles.taskContainer}>
                <Text>{item}</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => editTasks(index)}>
                        <Text style={{ color: "dodgerblue", fontWeight: "bold", fontSize: 16 }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTask(index)}>
                        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16, marginLeft: 10 }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                TODO APP
            </Text>
            <TextInput
                placeholder='Enter Task'
                style={styles.input}
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addTask}>
                <Text style={styles.btnText}>
                    {editTask !== -1 ? "Update Task" : "Add Task"}
                </Text>
            </TouchableOpacity>
            <FlatList
                data={taskList}
                renderItem={renderTask}
                keyExtractor={(item, index) => index.toString()}
            />
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
        flexDirection: "row",
        textAlign: "left"
    },
    taskContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexShrink: .5,
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 10,
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
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 4,
    },
    addBtn: {
        backgroundColor: "dodgerblue",
        width: "80%",
        padding: 8,
        marginVertical: 10,
        borderRadius: 5
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default ToDoApp;