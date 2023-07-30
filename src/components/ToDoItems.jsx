import Item from "./Item"
const ToDoItems = ({tasks,setTasks,newTask,setNewTask,handleCheckbox}) => {
  return (
    <ul className="mt-3">
        {tasks.map((item)=>(
            <Item 
            key={item.id}
            item={item}
            setTasks={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
            handleCheckbox={handleCheckbox}
            />
        ))}
    </ul>
  )
}

export default ToDoItems
