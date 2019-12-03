import React, { useState } from 'react';
import Entrance from './components/views'
import './App.css';

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      <Entrance state={state} setState={setState} />
    </div>
  );
}

export default App;
