import { useState } from "react";

import Form from "./Form/Form"
import List from "./List/List";



function Container() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  

  return <div className="container">
    <h1 id="header">todos</h1>
    <div className="incontainer">
    <Form todos={todos} setTodos={setTodos}/>
    <List todos={todos} setTodos={setTodos}/>
    </div>
  </div>
}

export default Container