import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import { store } from './store/store';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App