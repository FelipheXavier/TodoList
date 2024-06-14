const Item = ({item,handleCheckbox,deleteTask}) => {
   return (
     <li className="flex bg-blue-700 w-5/6 p-3 justify-between rounded-md m-2">
        <input
        id="check"
        className=" sm:w-7 w-5 rounded-lg cursor-pointer"
        type="checkbox"
        onChange={(e)=>handleCheckbox(item.id)}
        checked={item.done}
        >
        </input>
        <h2 className={`text-white sm:text-xl font-contrailOne ${(item.done) ? "line-through":null}`}>{item.title}</h2>
        <button onClick={()=>deleteTask(item.id)}className="sm:w-7 w-6 bg-red-700 text-white font-titanOne rounded-sm cursor-pointer">X</button>
     </li>
   )
 }
 
 export default Item
 