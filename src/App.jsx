import { useState } from "react"
import ToDoList from "./components/ToDoList"

function App() {
  const [newTask,setNewTask] = useState('')
  const [tasks,setTask] = useState([
    {
    id:13455,
    title:"Levar o chachorro para passear",
    done:true
  }
  ])

  const idGenerator = () =>{
    const RandomNumber = Math.round(Math.random()*100000)
    return RandomNumber
  }

  const addNewTask = () =>{
    if(tasks.length <=10 && newTask !== ""){
      const newItem = {id:idGenerator(),title:newTask,done:false}
      const newTasksArray = [...tasks,newItem]
      setTask(newTasksArray)
      
    }
    setNewTask('')
  }
  const handleCheckbox = (id) =>{
    const newItens = tasks.map((e)=>((e.id===id) ? {...e, done: !e.done }:e))
    setTask(newItens)
  }
  const deleteTask = (id) =>{
    const newItens = tasks.filter((e)=>(e.id !== id))
    setTask(newItens)
  }
  
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center">
      <ToDoList 
      tasks={tasks}
      setTask={setTask}
      newTask={newTask}
      setNewTask={setNewTask}
      addNewTask={addNewTask}
      handleCheckbox={handleCheckbox}
      deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
