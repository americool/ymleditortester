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
      <div>
      {keys.map(key => (
          <p>{isNaN(key) ? key + ":" : null} {this.parseValue(object[key])}</p>
      ))}
      </div>
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

  // createKeyValue = (key) => {
  //   const keyValue = typeof key === "number" ? null : key+":"
  //   return keyValue;
  // }
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderObject(keys, object)}
      </div>
    );
  }
}

export default App;
