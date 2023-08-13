import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";

const AddNote = ({addTodoHandler}) => {
    //use state to manage the current value of the note
    const [note,setNote] = useState('')

    //use dispatch to manage the global value of notes
    const dispatch = useDispatch()

    //function that handles the click event from add note button
    const addNoteHandler = (e)=>{
        e.preventDefault()
        dispatch(addNote({note,id:Date.now()}))
        setNote("")
    }
    
    return ( <div className="flex items-center justify-center">
        <textarea onChange={(e)=>{
            e.preventDefault()
            setNote(e.target.value)
        }} 
        name="note" 
        id="" cols="60" 
        rows="1" 
        className="ml-12 my-12 inline  border-gray-400 h-10 border-2 p-1" 
        value={note}></textarea>
        <button className="bg-orange-600 hover:bg-orange-400 rounded h-10 w-24" onClick={addNoteHandler}>add note</button>
    </div> );
}
 
export default AddNote;