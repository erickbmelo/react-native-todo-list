import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 15
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 5,
  },
  footer: {
    height: 70,
  }
});
