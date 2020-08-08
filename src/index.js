import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './Api';
import Dom from './Dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root') );

const name = "Vincent"

function greet(){
  return "Halo "+ name + " !";
}
const element = <h1> {greet()} </h1>;

ReactDOM.render(element,document.getElementById('master'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
