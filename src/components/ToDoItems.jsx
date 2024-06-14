import Item from "./Item"
const ToDoItems = ({tasks,setTasks,newTask,setNewTask,handleCheckbox,deleteTask}) => {
  return (
    <ul className="mt-3 w-full flex flex-col items-center overflow-auto">
        {tasks.map((item)=>(
            <Item 
            key={item.id}
            item={item}
            setTasks={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
            handleCheckbox={handleCheckbox}
            deleteTask={deleteTask}
            />
        ))}
    </ul>
  )
}

export default ToDoItems
