import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';
import Manager from './Manager';
import Configuration from './Configuration';

const manager = new Manager();

class App extends Component {
formatConfig = config => [<Dropdown manager={manager} {...config} />,  <br />, <br />, <br />]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {Configuration.map(this.formatConfig)}
        </header>
      </div>
    );
  }
}

export default App;
