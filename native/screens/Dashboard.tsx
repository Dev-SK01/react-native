import { Text, Button, View, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import auth from "@/services/firebaseAuth";


const Dashboard = ({ navigation }) => {

    const handleLogOut = () => {
        signOut(auth).then(navigation.navigate('login'))
    }
    const navigateTo = (path: string) => {
        navigation.navigate(path);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, paddingVertical: 10 }}>welcome to Dashboard</Text>
            <Text style={Styles.btn} onPress={() => navigateTo('basic')}>
                React Basic
            </Text>
            <Text style={Styles.btn} onPress={() => navigateTo('todo')}>
                ToDo APP
            </Text>
            <Button
                title="Logout"
                onPress={handleLogOut}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    btn: {
        marginVertical: 10,
        backgroundColor: 'dodgerblue',
        color: 'white',
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        width: "75%",
        textAlign: "center",
    }
})

export default Dashboard;