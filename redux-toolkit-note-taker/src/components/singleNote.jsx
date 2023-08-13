import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateNote ,deleteNote } from "../redux/notesSlice"

const SingleNote = ({note}) => {
    //use state to state the editing state of the todos
    const [isEditing,setIsEditing] = useState(false)

    //useDispatch to dispatch actions
    const dispatch = useDispatch()

    //useState to manage the current value of the note being edited
    const [currNote,setNote] = useState(note.note)

    //updating the value of a note
    const updateHandler = (e)=>{
        e.preventDefault()
        dispatch(updateNote({id:note.id,note:currNote}))
        setIsEditing(false)
    }

    //delete a specific note
    const deleteNoteHandler = ()=>{
        dispatch(deleteNote(note.id))
    }

    
    return ( <div className="w-1/2 my-2 border-gray-400 border p-2 bg-orange-100 rounded-lg" key={note.id}>
        {/* show the note or input based on isEditing */}
        {!isEditing && <p className="ml-4 mb-4">{currNote}</p>}
        {isEditing && <form onSubmit={updateHandler} className="items-start">
                <textarea cols={60} rows={3} value={currNote} onChange={(e)=>{
                    e.preventDefault()
                    setNote(e.target.value)
                }} className="border border-gray-400 bg-white m-3 block"/>
                <button type="submit"  className="bg-blue-400 rounded p-2 mr-2 ml-4" >update</button>
            </form>}
        <div className="m-4">
            {!isEditing&&<button className="bg-blue-400 rounded p-2 mr-2 block mb-2" onClick={
                (e)=>{
                    setIsEditing(!isEditing)
                    setNote(note.note)
                }
                
            }>update</button>}
            <button className="bg-red-700 rounded p-2" 
                onClick={deleteNoteHandler}>delete</button>
        </div>  
    </div> );
}
 
export default SingleNote;