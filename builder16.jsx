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
  const [outputStatus, setOutputStatus] = useState('info'); // 'info', 'success', or 'error'

  const handleCompilePress = async () => {
    if (!code) {
      setOutput('Please enter some code to compile.');
      setOutputStatus('error');
      return;
    }
    setOutput('Compiling...');
    setOutputStatus('info');
    try {
      const response = await CompilerModule.compileCode(code);
      if (response.status === 'success') {
        setOutput(response.message);
        setOutputStatus('success');
      } else {
        setOutput(`Error: ${response.message}`);
        setOutputStatus('error');
      }
    } catch (error) {
      setOutput(`Compilation failed: ${error.message}`);
      setOutputStatus('error');
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
          <Text 
            style={[
              styles.outputText, 
              outputStatus === 'error' && styles.errorText,
              outputStatus === 'success' && styles.successText,
            ]}
          >
            {output}
          </Text>
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
  errorText: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  successText: {
    color: '#32CD32',
  },
});

export default App;
