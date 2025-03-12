import { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, ScrollView, FlatList } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Text
          style={styles.text}>
          Hi, Welcome to React Native !!
        </Text>
        <Greetings name='React' />
        <Greetings name={`React Native ${count}`} />
        <Text style={{ ...styles.text, color: 'red' }}>{text}</Text>
        <Button title="Hit Me" onPress={() => setCount(count + 1)} />
        <TextInput
          placeholder="Enter Here..."
          onChangeText={(newText) => setText(newText)}
          style={styles.text}
        >
        </TextInput>
        <Text>SCROLL VIEW</Text>
        <ScrollView>
          <Scroll />
        </ScrollView>
        <Text>FLAT LIST</Text>
        <FlatList
          data={lettersMap}
          renderItem={(letter) => <Text style={styles.text}>{letter.item.text}</Text>}
        />
      </View>
    </>
  );

}

const Greetings = (props: { name: string }) => {
  return (
    <Text style={styles.text} >{props.name}</Text>
  )
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
const lettersMap = letters.map((value, index) => ({ text: value, key: index }))

const Scroll = () => {
  return (
    letters.map((letter, index) => <Text key={index} style={styles.text}>{letter}</Text>)
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    padding: 20,
  }
})

