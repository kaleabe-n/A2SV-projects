import './tailwind-all.css'
import store from './redux/store';
import { Provider } from 'react-redux'
import MainComponent from './components/mainComponent';


function App() {

  //wrap the main component with provider
  return (
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  );
}

export default App;
