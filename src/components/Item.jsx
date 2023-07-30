const Item = ({item,setTasks,addNewTask,handleCheckbox}) => {
   return (
     <li className="flex bg-blue-700 w-80 p-3 justify-between rounded-md m-2">
        <input
        id="check"
        className=" w-5 rounded-lg"
        type="checkbox"
        onChange={(e)=>handleCheckbox(item.id)}
        checked={item.done}
        >
        </input>
        <h2 className={`text-white font-contrailOne ${(item.done) ? "line-through":null}`}>{item.title}</h2>
        <button className="w-6 bg-red-700 text-white font-titanOne rounded-sm">X</button>
     </li>
   )
 }
 
 export default Item
 