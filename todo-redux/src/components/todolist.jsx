import SingleTodo from "./singleTodo"

const TodoList = ({todos,deleteTodoHandler,updateTodoHandler,changeDoneState}) => {
    //filter incomplete and complete tasks
    let incomplete = todos.value.filter((todo)=>!todo.done)
    let complete = todos.value.filter((todo)=>todo.done)
    //pass the props to each todo
    return ( <div className="flex flex-col items-center">
        {/* incomplete tasks */}
        {incomplete.length>0 && <h2 className="text-blue-500 font-sans text-3xl font-semibold">Incomplete</h2>}
        {incomplete.map((todo)=>{
            return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
        })}
        {/* complete tasks */}
        {complete.length>0 && <h2 className="text-blue-500 font-sans text-3xl font-semibold">Complete</h2>}
        {complete.map((todo)=>{
            return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
        })}
    </div> );
}
 
export default TodoList;