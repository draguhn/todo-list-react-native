import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo'
import Sandbox from './components/Sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create todo app", key: "2" },
    { text: "sleep more", key: "4" },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key !== key))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [{ text: text, key: Math.random().toString() }, ...prevTodos])
    } else {
      Alert.alert("Ooops", "Todos must be over 3 char long", [
        { text: "understood", onPress: () => console.log("alert closed") }
      ])
    }
  }

  return (

    <Sandbox />
    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss();
    //   console.log("dismissed Keyboard")
    // }}>
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
    //       <AddTodo submitHandler={submitHandler} />
    //       <View style={styles.list}>
    //         <FlatList
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandler={pressHandler} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
