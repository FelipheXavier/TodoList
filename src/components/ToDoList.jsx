import ToDoItems from "./ToDoItems"
const ToDoList = ({tasks,setTasks,newTask,setNewTask,addNewTask,handleCheckbox,deleteTask}) => {
  return (
    <div className="rounded-xl w-7/12 bg-blue-600 h-4/6 flex items-center flex-col">
      <h1 className="text-white text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-titanOne p-2">To do list</h1>
      <form className="w-11/12 justify-center flex gap-5 mt-2" onSubmit={(e)=>e.preventDefault()}>
        <input
        onChange={(e)=>setNewTask(e.target.value)}
        className="rounded-lg p-1 sm:p-2 w-3/4 font-contrailOne outline-none"
        type="text"
        placeholder="Add a Item"
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
      deleteTask={deleteTask}
      />
    </div>
    
  )
}

export default ToDoList
