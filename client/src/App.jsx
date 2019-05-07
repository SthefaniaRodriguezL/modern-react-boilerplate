import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//components
import Gradient from './Components/gradient';

class App extends React.Component {

  render() {
    return (
		  <div>
        <h1>CSS GRADIENT</h1>
         <h3>Gradient Generator for Linear and Radial CSS Color Gradients</h3>
         <div class="container">
          <Gradient />
         </div>
      </div>
    );
  }
}

export default App;
