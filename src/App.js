import React, { useState } from "react";
import data from "./data.json";
// components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [toDoList, setToDoList] = useState(data);

  return (
    <div>
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default App;
