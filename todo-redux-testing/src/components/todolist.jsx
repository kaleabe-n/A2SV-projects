import {useDispatch,useSelector} from 'react-redux'
import SingleTodo from "./singleTodo"
import { changeState } from '../todosSlice'

const TodoList = ({todos,deleteTodoHandler,updateTodoHandler,changeDoneState}) => {
    //filter incomplete and complete tasks
    let incomplete = todos.value.filter((todo)=>!todo.done)
    let complete = todos.value.filter((todo)=>todo.done)

    //filter state
    const dispatch = useDispatch()
    const viewState = useSelector(state=>state.todos.viewState)
    //(viewState,"viewState")

    //handle filter function to handle change in the drop down
    const handleFilter = (e)=>{
        e.preventDefault()
        dispatch(changeState(e.target.value))
    }

    let content = null;
    if(viewState==="all"){
        content = 
            <div className="flex flex-col items-center w-full">
                {/* all tasks */}
                {complete.length>0 && <h2 className="text-blue-800 font-sans text-3xl font-semibold" data-test="complete-header">Complete</h2>}
                {complete.map((todo)=>{
                    return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
                })}
                {incomplete.length>0 && <h2 className="text-blue-800 font-sans text-3xl font-semibold" data-test="incomplete-header">Incomplete</h2>}
                {incomplete.map((todo)=>{
                    return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
                })}
            </div>
    }else if(viewState==="complete"){
        content = 
            <div className="flex flex-col items-center w-full">
                {/* complete */}
                {complete.length>0 && <h2 className="text-blue-800 font-sans text-3xl font-semibold" data-test="complete-header">Complete</h2>}
                {complete.map((todo)=>{
                    return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
                })}
            </div>
    }else{
        content = 
            <div className="flex flex-col items-center w-full">
                {/* incomplete */}
                {incomplete.length>0 && <h2 className="text-blue-800 font-sans text-3xl font-semibold" data-test="incomplete-header">Incomplete</h2>}
                {incomplete.map((todo)=>{
                    return (<SingleTodo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>)
                })}
            </div>
    }

    //(viewState)
    //pass the props to each todo
    return ( 
    <div className='flex flex-col items-center w-full'>
        <select name="filter" id="" defaultValue={"all"} onChange={handleFilter} className='mx-64 my-4 border w-32 h-10 p-2'>
            <option value="all" >All</option>
            <option value="complete">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
        {content}
    </div>
     );
}
 
export default TodoList;