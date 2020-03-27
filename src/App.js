import React from 'react';
import './styles/day.css';
import Currentday from './components/CurrentDay';

function App() {
  return (
    <div className="App">
      <Currentday day="5" iftaar="7.15 pm" sehri="4.15 am" timeLeft="4"/>
    </div>
  );
}

export default App;
