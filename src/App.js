import React, { Component } from 'react';
import './App.css';
import SelectBoard from './components/SelectBoard';
//import { boards} from './levels.json';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SelectBoard />
      </div>
    );
  }
}

export default App;
