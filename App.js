import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import CardTodo from './components/CardTodo';
import { useState } from 'react';


export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Walk the dog", isCompleted: true },
    { id: 2, title: "Go to the dentist", isCompleted: false },
    { id: 3, title: "Learn React Native", isCompleted: false },
    { id: 4, title: "Walk the dog", isCompleted: true },
    { id: 5, title: "Go to the dentist", isCompleted: false },
    { id: 6, title: "Learn React Native", isCompleted: false },
    { id: 7, title: "Walk the dog", isCompleted: true },
    { id: 8, title: "Go to the dentist", isCompleted: false },
    { id: 9, title: "Learn React Native", isCompleted: false },
  ])

  function renderTodoList(){
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
      )
    )
  }

  function updateTodo(todo){
    const todoAtualizado = {
      ...todo, isCompleted: !todo.isCompleted
    }
    const updatedTodoList = [...todoList, ]
    const indiceAAtualizar = updatedTodoList.findIndex(t => t.id === todoAtualizado.id)
    updatedTodoList[indiceAAtualizar] = todoAtualizado
    setTodoList(updatedTodoList)
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>
              {renderTodoList()}
            </ScrollView>
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
  cardItem: {
   marginBottom: 15 
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 5,
  },
  footer: {
    height: 70,
    backgroundColor: "white"
  }
});
