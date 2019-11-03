import React, { Component } from 'react';
import ComonMan, {HelloWorld} from './components/learning-examples/ComoMan';
import AdditionalComponent from './components/learning-examples/AdditionalComponent'
import FourthComponent from './components/learning-examples/FourthComponent'
import Counter from './components/counterit/Counter'
import Counter2 from './components/counterit/Counter2'
import TodoApp from './components/todo/TodoApp'
import logo from './logo.svg';
import './App.css';
import './bootsrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<Counter></Counter>
      <Counter2></Counter2>*/}
      <TodoApp></TodoApp>
      </div>
    );
  }
}


class Learning01 extends Component {
  render() {
    return (
      <div className="Learning01">
        Hello React
        <ComonMan></ComonMan>
        <HelloWorld></HelloWorld>
        <AdditionalComponent></AdditionalComponent>
        <FourthComponent></FourthComponent>
      </div>
    );
  } 
}

export default App;