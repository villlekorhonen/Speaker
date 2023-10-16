import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, Keyboard } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [input, setInput] = useState('');

  const speak = () => {
    Speech.speak(input);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Speaker app</Text>
      <TextInput style={styles.input}
        placeholder='Write text here'
        onChangeText={text => setInput(text)}
        value={input}>
      </TextInput>

      <TouchableOpacity style={styles.button} title="button" onPress={speak}>
        <Text style={styles.text}> Press to hear</Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 50,
    marginTop: -50,
    color: 'white'
  },
  input: {
    width: '65%',
    height: '10%',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 15,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 15
  },
  button: {
    width: '50%',
    height: '7%',
    backgroundColor: 'gold',
    borderRadius: 25
    
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight:'600',
    textAlign: 'center',
    marginTop: 8
  },
});
