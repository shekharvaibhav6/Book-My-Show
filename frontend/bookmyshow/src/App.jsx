import { useState } from 'react'
import './App.css';
import Home from './Pages/Home'
import BsState from './Context/BsState';

// import './App.css'

function App() {
  return (
    <div className="App">
    <BsState>
    <Home />
  </BsState> 
    </div>
  )
}

export default App
