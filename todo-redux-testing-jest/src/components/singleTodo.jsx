import { useState } from "react"

const SingleTodo = ({todo,deleteTodoHandler,updateTodoHandler,changeDoneState}) => {
    //use state to state the editing state of the todos
    const [isEditing,setIsEditing] = useState(false)
    const [edit,setEdit] = useState('')

    //function to be called when the edit button is clicked
    const editButtonHandler = (e)=>{
        e.preventDefault()
        setIsEditing(!isEditing)
        setEdit(todo.content)
    }

    //function called when used press enter after entering the new value
    const submitHandler = (e)=>{
        e.preventDefault()
        updateTodoHandler({content:edit,id:todo.id})
        setIsEditing(false)
    }

    //change done state handler button
    const changeStateHandler = (e)=>{
        e.preventDefault()
        changeDoneState(todo.id)
    }
    return ( <div className="w-1/2 flex justify-between my-2 border-gray-400 border p-2 bg-blue-100" key={todo.id} data-testid="single-todo">
        {/* show the button or input based on isEditing */}
        {!isEditing && <p className="ml-4">{todo.content}</p>}
        {isEditing && <form onSubmit={submitHandler} className="ml-4" data-testid="update-form"><input value={edit} data-testid="update-input" onChange={(e)=>{
                e.preventDefault()
                setEdit(e.target.value)
            }} className="border border-gray-400 bg-white h-10 w-64"/></form>}
        <div>
            <button className="bg-blue-400 rounded p-2 mr-2" onClick={editButtonHandler} data-testid="update-button">{!isEditing?"update":"undo"}</button>
            <button className="bg-blue-400 rounded p-2 mr-2" onClick={changeStateHandler} data-testid={`change-state-button-${todo.done?"undone":"done"}`}>{todo.done?"undone":"done"}</button>
            <button className="bg-red-700 rounded p-2" 
                data-testid="delete-button"
                onClick={
                    (e)=>{
                        e.preventDefault()
                        deleteTodoHandler(todo.id)
                    }
                }>delete</button>
        </div>  
    </div> );
}
 
export default SingleTodo;