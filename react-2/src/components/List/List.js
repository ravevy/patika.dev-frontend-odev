import { useState, useEffect } from "react";


function List({todos, setTodos}){
  const [filter, setFilter] = useState("All");
  const [left, setLeft] = useState("");
  const [done, setDone] = useState("")
  
  const active = () => {setFilter("Active")} 
  const all = () => {setFilter("All")} 
  const complete = () => {setFilter("Complete")} 

  useEffect(()=>{
    if(todos.length > 0){
    let leftCount = todos.map((item)=>{return item.done ? 0 : 1}).reduce((total, num) =>{ return total + num})
    let doneCount = todos.map((item)=>{return item.done ? 1 : 0}).reduce((total, num) =>{ return total + num})
    setLeft(leftCount)
    setDone(doneCount)}
    else{setLeft(0)}
  }, [todos])

  const handleCheck = (event) => {
    let newList = [...todos]
    newList[event.target.id].done = event.target.checked
    filtered[event.target.id].done = event.target.checked
    setTodos(newList)
  }

  const valueCheck = (event) => {
    let newList = [...todos]
    newList[event.target.id].value = event.target.innerText
    setTodos(newList)
  }

  const filtered = todos.filter((item)=>{
    if(filter === "All"){
      return item}
    else if(filter === "Active"){
      return (!item.done && item)}
    else if(filter === "Complete"){
      return (item.done && item)}})

  const clearList = () => {
    setTodos(todos.filter((item)=>{return !item.done}));
    setDone(0)
  }

  const deleteItem = (event) => {
    let newList = [...todos]
    newList.splice((event.target.id), 1)
    setTodos(newList)
  }

  useEffect(()=>{localStorage.setItem("todos", JSON.stringify(todos))}, [todos])
  
  return <div>
      <ul id="liste">
        {filtered
          .map((item, key)=>{
            return <li key={key}>
              <span className="listit">
                <span>
                  <input id={key} type="checkbox" checked={item.done} onChange={handleCheck}/>
                  <span id={key} className={item.done ? "checked" : ""} onInput={valueCheck} contentEditable suppressContentEditableWarning={true}>{item.value}</span>
                </span>
                <span id={key} className="delete" onClick={deleteItem}>x</span>
              </span> 
              </li>})}
      </ul>
      <div className="foot">
      <span>{left} item{left === 1 ? false : "s"} left </span>
      <div className="footbuttons">
        <button className={filter === "All" ? "active" : ""} onClick={all}>All</button>
        <button className={filter === "Complete" ? "active" : ""} onClick={complete}>Completed</button>
        <button className={filter === "Active" ? "active" : ""} onClick={active}>Active</button>
      </div>
      <button id="clear" className={done > 0 ? "" : "clear"} onClick={clearList}>Clear Completed</button>
      </div>
    </div>
}

export default List;