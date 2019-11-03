import React, { Component } from 'react';

//Class Component
export default class ComonMan extends Component {
    render() {
      return (
        <div className="myFirstComponent">
          <p>myFirstComponent</p>
        </div>
      );
    }
  }

  //Class Component
export class HelloWorld extends Component {
    render() {
      return (
        <div className="helloWorld">
         <p>HelloWorld</p>
        </div>
      );
    }
  }