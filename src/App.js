import React, { Component } from 'react';
import logo from './logo.svg';
import YAML from 'yamljs';
import file from './config.yml'
import './App.css';

const object = YAML.load(file);
const keys = Object.keys(object);

class App extends Component {
    renderObject = (keys, object) => {
    return (
      <form>
      {keys.map(key => (
          <form>
          <input type="text" value={isNaN(key) ? key + ":" : null} />
          <input type="text" value={typeof object[key] === 'string' ? object[key] : null} />
          {typeof object[key] === 'object' ? this.parseValue(object[key]) : null}
          </form>
      ))}
      </form>
    );
  };

  parseValue = (value) => {
    switch(typeof value){
      case 'object':
        return this.renderObject(Object.keys(value), value);
        break;
      default:
        return value.toString();
    }
  }

  // renderCategory = (key) => {
  //   return (
  //     <p>{key}:</p>
  //   )
  // }
  // renderForm = (key, value) => {
  //   return (
  //     <form>
  //       <label>
  //         {key}:
  //         <input type="text" value={value} />
  //       </label>
  //     </form>
  //   )
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.renderObject(keys, object)}
      </div>
    );
  }
}

export default App;
