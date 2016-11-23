import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var $ = require('jquery');

class Button extends Component {
    heyWhatUp() {
        $.get("http://192.168.1.7:3001/", function(data) {
            console.log(data);
        });
    }

    render() {
        return (
                <div>
                <button onClick={this.heyWhatUp}>Click me!</button>
                </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World</h2>
          <Button />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
