import { useEffect, useState } from "react"

function Form({todos, setTodos}){
  const [input, setInput] = useState("")

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  const inputSubmit = (e) => {
    e.preventDefault();
    if(input !== ""){
    setTodos([...todos, {value: input, done: false}])
    setInput("")}
  }

  const allInputChange = (event) => {
    setTodos(todos.map((item)=>{return {value: item.value, done: event.target.checked}}))
  }

  useEffect(()=>{localStorage.setItem("todos", todos)}, [todos])

  return <form onSubmit={inputSubmit} className="form">
    <input type="checkbox" onChange={allInputChange} />
    <input type="text" onChange={inputChange} value={input} placeholder="What's your plan?"/>
  </form>

}

export default Form