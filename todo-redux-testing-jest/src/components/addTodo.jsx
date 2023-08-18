import { configureStore } from "@reduxjs/toolkit";

const AddTodo = ({addTodoHandler}) => {

    //this is the reducer function that is used to set the valueof the current todo
    const singleTodoReducer = (state = "",action)=>{
        if(action.type==="changeTodo"){
            return action.payload
        }
    }
    //store that will be used to dispatch
    const store = configureStore({reducer:singleTodoReducer})

    //function that will be called when add todo clicked
    const todoHandler = (e)=>{
        // e.preventDefault()
        console.log(store.getState())
        addTodoHandler(store.getState())
    }
    return ( <div className="flex items-center justify-center">
        <textarea onChange={(e)=>{
            // e.preventDefault()
            store.dispatch({
                type:'changeTodo',
                payload: e.target.value
            })
        }} 
        name="todo" 
        data-testid = 'add-todo-input'
        id="" cols="60" 
        rows="1" 
        className="ml-12 my-12 inline  border-gray-400 h-10 border-2 p-1" 
        value={store.getState()}></textarea>
        <button className="bg-blue-600 hover:bg-blue-400 rounded h-10 w-24" onClick={todoHandler} data-testid="add-todo-button">add todo</button>
    </div> );
}
 
export default AddTodo;