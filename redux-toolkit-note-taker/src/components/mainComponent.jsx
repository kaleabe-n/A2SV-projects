import NoteList from "./noteList";
import Header from './header'
import AddNote from "./addNote";

const MainComponent = () => {
    //the main component that desplays every thing
    return (<div className="App">
        <Header />
        <AddNote />
        <NoteList/>
  </div>)

}
 
export default MainComponent;
