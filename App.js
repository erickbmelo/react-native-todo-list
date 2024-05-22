import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import CardTodo from './components/CardTodo';
import { useState } from 'react';
import TabBottomMenu from './components/TabBottomMenu';
import { ButtonAdd } from './components/ButtonAdd';
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";


export default function App() {
  const [todoList, setTodoList] = useState([])
  const [selectedTabName, setSelectedTabName] = useState("all")
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false)
  const [inputValue, setinputValue] = useState("")

  function getFilteredList(){
    switch(selectedTabName){
      case "all":
        return todoList
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted)
      case "done":
        return todoList.filter((todo) => todo.isCompleted)
    }
  }

  function deleteTodo(todoToDelete){
    Alert.alert("Excluir todo", "Você tem certeza que deseja excluir o ToDo?",
      [
        {"text": "Excluir",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((t) => t.id !== todoToDelete.id))
        }},
        {"text": "Cancelar", style: "cancel"},
      ]
    )
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    }
    setTodoList([...todoList, newTodo])
    setIsAddDialogDisplayed(false)
    setinputValue("")
  }

  function renderTodoList(){
    return getFilteredList().map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
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

  function renderAddDialog() {
    return (
      <Dialog.Container visible={isAddDialogDisplayed} onBackdropPress={() => setIsAddDialogDisplayed(false)}>
        <Dialog.Title>Add todo</Dialog.Title>
        <Dialog.Description>
          Choose a name for your todo.
        </Dialog.Description>
        <Dialog.Input onChangeText={setinputValue} placeholder="Ex: Go to the dentist" />
        <Dialog.Button label="Cancel" color="grey" onPress={() => setIsAddDialogDisplayed(false)}/>
        <Dialog.Button disabled={inputValue.length===0} label="Save" onPress={addTodo}/>
      </Dialog.Container>
    )
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
          <ButtonAdd onPress={() => setIsAddDialogDisplayed(true)} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          todoList={todoList}
          selectedTabName={selectedTabName}
          onPress={setSelectedTabName}
        />
      </View>
      {renderAddDialog()}
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
