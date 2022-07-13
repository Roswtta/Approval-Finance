import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className='app'>
      <Home />
    </div>
  );
}

export default App;
