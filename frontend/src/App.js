import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
       <h1>Hola</h1>
       <img className='imagenLog' src='https://avatars.githubusercontent.com/u/133683120?s=400&u=18a8b9f43e41b9ea6741aacc954b45f36bcf396d&v=4' alt=""></img>
      </header>
    </div>
  );
}

export default App;
