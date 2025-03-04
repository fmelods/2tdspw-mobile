import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Felipe Melo</Text>
      <Text style ={styles.text}>Turma 2TDSPW</Text>
      <Image source={require('./assets/splash-icon.png')} style={{ width: 200, height: 200 }} />
      <TextInput style={styles.input} placeholder='Digite seu nome' />
      <Button title='Salvar' color={'yellow'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 36,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    width: 300,
  }
});
