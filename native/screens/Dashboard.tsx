import { Text, Button, View } from "react-native";
import { signOut  } from "firebase/auth";
import auth from "@/services/firebaseAuth";


const Dashboard = ({navigation}) => {
    const handleLogOut = () => {
        signOut(auth).then(navigation.navigate('login'))
    }
    return (
        <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold' , fontSize:20 , paddingVertical:10} }>welcome to Dashboard</Text>
            <Button title="Logout" onPress={handleLogOut} />
        </View>
    )
} 

export default Dashboard;