import SingleNote from "./singleNote"
import { useSelector } from "react-redux"

const NoteList = () => {
    //selector to access the value of the notes
    const selector = useSelector(state=>{
        console.log(state.notes)
        return state.notes})

    // use the selector above to access the values of the notes
    const notes = selector.value

    //pass the props to each todo
    return ( <div className="flex flex-col items-center">
        {/* incomplete tasks */}
        {notes.length>0 && <h2 className="text-orange-600 font-sans text-3xl font-semibold">Notes</h2>}
        {notes.map((note)=>{
            return (<SingleNote key={note.id} note={note}/>)
        })}
    </div> );
}
 
export default NoteList;