
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  SafeAreaView, 
  Button,
  NativeModules
} from 'react-native';

const { CompilerModule } = NativeModules;

const App = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('Welcome to Terminal-16!');

  const handleCompilePress = async () => {
    if (!code) {
      setOutput('Please enter some code to compile.');
      return;
    }
    setOutput('Compiling...');
    try {
      const result = await CompilerModule.compileCode(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Compilation failed: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Terminal-16</Text>
        <TextInput
          style={styles.codeArea}
          multiline
          placeholder="Start typing your code here..."
          placeholderTextColor="#555"
          onChangeText={setCode}
          value={code}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          title="Compile"
          onPress={handleCompilePress}
          color="#00FF00"
        />
        <ScrollView style={styles.outputArea}>
          <Text style={styles.outputText}>{output}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    color: '#00FF00',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  codeArea: {
    flex: 3,
    backgroundColor: '#111',
    color: '#00FF00',
    fontSize: 14,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'monospace',
    textAlignVertical: 'top',
  },
  outputArea: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 5,
  },
  outputText: {
    color: '#00FF00',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});

export default App;
