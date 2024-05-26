import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, bold } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.bold}>Emmanuel kwesi Mensah</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

text: {
  fontSize: 24,
},
bold: {
   fontWeight: 'bold',
}
});
