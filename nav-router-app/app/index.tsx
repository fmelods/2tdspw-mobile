import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Corinthians x Barcelona</Text>
      <Link href="/corinthians">Ver detalhes do Corinthians</Link>
      <Link href="/barcelona">Ver detalhes do Barcelona</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
