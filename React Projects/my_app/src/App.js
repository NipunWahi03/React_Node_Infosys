import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import React, { useState, useEffect } from "react";
import Add_Todo from "./Components/Add_Todo";

function App() {
  //initialising the initTodo, in case some data is available in the local storage
  let initTodo;

  //In case the local storage doesn't have any value persisted, we will initialise the initTodo to an empty array
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  //else we will fetch the data from the local storage and initialise the initTodo array with the persisted data
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //To add the items in the todos list
  const insert_item = (title, description) => {
    let sno;
    if (item_list.length === 0) {
      sno = 1;
    } else {
      sno = item_list[item_list.length - 1].sno + 1;
    }

    let new_item = {
      sno: sno,
      title: title,
      description: description,
    };
    //Adding the data in the end of the list by using the spread operator, spread operator is basically concept of ES6.
    set_item_list([...item_list, new_item]);
  };

  //To delete the value of the todo item
  const onDelete = (todos) => {
    set_item_list(
      item_list.filter((items) => {
        return items !== todos;
      })
    );
  };

  //To update the value of the todo item
  const onUpdate = (todos) => {
    let updated_value;
    updated_value = {
      title: todos.title,
      description: todos.description,
    };
    console.log(updated_value); //Call to insert_item function to make some changes.
  };
  //Initialising the item_list array, we will use useState Hook
  const [item_list, set_item_list] = useState(initTodo);

  //If there is any updation in the list, to save it in the local storage, we will use useEffect Hook
  //In this, "todos" is abasically a key to store the data in the local storage and "item_list" is the array of the objects which contains all the todos list
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(item_list));
  }, [item_list]);
  return (
    <>
      <Header />
      <Add_Todo insert_item={insert_item} />
      <Todos todos={item_list} onDelete={onDelete} onUpdate={onUpdate} />
    </>
  );
}

export default App;
