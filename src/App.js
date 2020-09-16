import React from 'react';
import Navibar from './components/SpringBootNav/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navibar/>
        <header className="App-header">
       
          <h1 className="App-title">Welcome to Duologik</h1>
        </header>
        <p className="App-intro">
          Simple React Web App
        </p>
    </div>
  );
}

export default App;
