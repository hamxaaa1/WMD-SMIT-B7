import './App.css';
import {Provider} from 'react-redux'
import { store } from './store/store';
import Count from './components/Count';


function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
