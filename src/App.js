import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Context from './Context';
import Configuration from './Configuration';

const context = new Context();

class App extends Component {
formatConfig = config => [<Dropdown context={context} {...config} />,  <br />, <br />, <br />]

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
