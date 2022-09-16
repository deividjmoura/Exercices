import React from 'react';
import ReactDOM from 'react-dom'
import {useState} from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {

  const [text, setText] = useState(" ")
  return (
    <div className="App">
      <input onChange={(element) => {setText(element.target.value)}} value={text}></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
