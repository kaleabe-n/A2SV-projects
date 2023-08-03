import './App.css';
import './bootstrap.min.css'
import Card from './components/Card';
import Header from './components/Header';
import User from './models';

function App() {
  let currUser:User = {
    name: "Kaleabe Negussie",
    imagePath:'./components/img.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure sequi, consequuntur ut quibusdam libero veniam nihil et natus voluptas sint ducimus adipisci provident dolore amet impedit repellat eos expedita.",
    email: "kaleabe@gmail.com",
    link:'/'
  }

  return (
    <div className="App">
      <Header/>
      <Card user={currUser}/>
    </div>
  );
}

export default App;
