import { Text, View ,FlatList } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#000'
      }}
    >
      <Text 
      style={
        {color:'#ffff' ,
        fontSize:16,
        fontWeight:'bold'}
        }>Hi, Welcome to React Native !!</Text>
    </View>
     <View
     style={{
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor:'#000'
     }}
   >
     <Text 
     style={
       {color:'#ffff' ,
       fontSize:16,
       fontWeight:'bold'}
       }>Hi, Welcome to React Native !!</Text>
   </View>
   </>
  );
}
