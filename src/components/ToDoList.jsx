import ToDoItems from "./ToDoItems"
const ToDoList = ({tasks,setTasks,newTask,setNewTask,addNewTask,handleCheckbox}) => {
  return (
    <div className="rounded-xl w-11/12 bg-blue-600 h-4/6 flex items-center flex-col">
      <h1 className="text-white text-2xl font-titanOne p-2">To do list</h1>
      <form className="w-11/12 justify-center flex gap-5 mt-2" onSubmit={(e)=>e.preventDefault()}>
        <input
        onChange={(e)=>setNewTask(e.target.value)}
        className="rounded-lg p-1 w-3/4 font-contrailOne outline-none"
        type="text"
        placeholder="Add a Item"
        required
        value={newTask}
        ></input>
        <button onClick={addNewTask}className="bg-green-600 w-10 text-white text-xl font-titanOne rounded-md">+</button>
      </form>
      <ToDoItems 
      handleCheckbox={handleCheckbox}
      tasks={tasks}
      setTasks={setTasks}
      newTask={newTask}
      setNewTask={setNewTask}
      addNewTask={addNewTask}
      />
    </div>
    
  )
}

export default ToDoList
