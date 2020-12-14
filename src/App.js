import logo from './logo.svg';
import './App.css';
import React from 'react';
import Wheel from "./screens/Wheel";
import Screen from "./screens/Screen";
import Coverflow from "./screens/Coverflow";
import Games from "./screens/Games";
import Settings from "./screens/Settings";
import Music from "./screens/Music";
import Video from "./screens/Video";
import Artist from "./screens/Artist";
import Playlist from "./screens/Playlist";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
