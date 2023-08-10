import { configureStore } from "@reduxjs/toolkit"
import { useState } from "react"

const SingleTodo = ({todo,deleteTodoHandler,updateTodoHandler,changeDoneState}) => {
    //use state to state the editing state of the todos
    const [isEditing,setIsEditing] = useState(false)

    //the reducer function to handle the change in the edit input
    const singleTodoReducer = (state = todo.content,action)=>{
        if(action.type==="changeTodo"){
            return action.payload
        }
    }

    //store to handle change in todo
    const store = configureStore({reducer:singleTodoReducer,preloadedState:todo.content})

    //function to be called when the edit button is clicked
    const editButtonHandler = (e)=>{
        e.preventDefault()
        setIsEditing(!isEditing)
    }

    //function called when used press enter after entering the new value
    const submitHandler = (e)=>{
        e.preventDefault()
        updateTodoHandler({content:store.getState(),id:todo.id})
        setIsEditing(false)
    }

    //change done state handler button
    const changeStateHandler = (e)=>{
        e.preventDefault()
        changeDoneState(todo.id)
    }
    return ( <div className="w-1/2 flex justify-between my-2 border-gray-400 border p-2 bg-blue-100" key={todo.id}>
        {/* show the button or input based on isEditing */}
        {!isEditing && <p className="ml-4">{todo.content}</p>}
        {isEditing && <form onSubmit={submitHandler} className="ml-4"><input value={store.getState()} onChange={(e)=>{
                e.preventDefault()
                store.dispatch({
                    type:'changeTodo',
                    payload: e.target.value
                })
            }} className="border border-gray-400 bg-white h-10 w-64"/></form>}
        <div>
            <button className="bg-red-700 rounded p-2 mr-2" 
            onClick={
                (e)=>{
                    e.preventDefault()
                    deleteTodoHandler(todo.id)
                }
            }>delete</button>
            <button className="bg-blue-400 rounded p-2 mr-2" onClick={editButtonHandler}>update</button>
            <button className="bg-blue-400 rounded p-2" onClick={changeStateHandler}>{todo.done?"undone":"done"}</button>
        </div>  
    </div> );
}
 
export default SingleTodo;