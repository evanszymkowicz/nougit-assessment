import React from 'react';
import EntryViewer from './components/EntryViewer'
import './App.css';

function App() {
  return (
    <div className="App">
      <EntryViewer state={state} setState={setState} />
    </div>
  );
}

export default App;
