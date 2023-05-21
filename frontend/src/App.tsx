import React from 'react';
import logo from './logo.svg';
import pong from './img/pong.png';
import github from './img/github.png';
import fourtytwo from './img/ft.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pong} className="App-logo" alt="logo" />
        <br></br>
        <button className='Login-button'><text className='icon-text'>Login with</text>
		<img src={fourtytwo} alt="Ft-icon" className='icon'/></button>
        <br></br>
        <button className='Login-button'><text className='icon-text'>Login with Github</text>
		<img src={github} alt="git-icon" className='icon'/></button>
        <br></br>
		<div className='Email'>
        <button className='Login-button' id='Email-Login'>Login with E-mail</button>
        <button className='Login-button' id='Email-Register'>Register with E-mail</button>
        </div>
		{/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
