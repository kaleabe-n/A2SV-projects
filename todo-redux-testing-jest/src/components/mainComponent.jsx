import TodoList from "./todolist";
import AddTodo from "./addTodo";
import Header from './header'
import { useDispatch, useSelector } from "react-redux";
import { addTodo,removeTodo, toggleDone, updateTodo } from "../todosSlice";

const MainComponent = () => {

    //this is dispatch to dispatch action
    const dispatch = useDispatch()

    //selector to access the value of the current state
    const selector = useSelector(state=>state.todos)

    //function to handle the adding new todo to the state
    const addTodoHandler=(newTodo)=>{
        dispatch(addTodo({content:newTodo,id:Date.now(),done:false}))
    }

    //function that handles deleting a todo with specific id
    const deleteTodoHandler=(id)=>{
        dispatch(removeTodo(id))
    }

    //function that handles updating todo
    const updateTodoHandler=(todo)=>{
        dispatch(updateTodo(todo))
    }

    //function that handles changing done state
    const changeDoneState=(id)=>{
        dispatch(toggleDone(id))
    }
    return (<div className="App">
        <Header />
        <AddTodo addTodoHandler={addTodoHandler} />
        {/* render the list of todos if the list is not empty */}
        {selector && <TodoList todos={selector} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} changeDoneState={changeDoneState}/>}
  </div>)

}
 
export default MainComponent;
