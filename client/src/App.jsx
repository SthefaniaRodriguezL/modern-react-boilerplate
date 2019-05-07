import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//components
import Buttons from './Components/Buttons';

class App extends React.Component {

  render() {
    return (
		  <div>
        <h1>CSS GRADIENT</h1>
         <h3>Gradient Generator for Linear and Radial CSS Color Gradients</h3>
          <Buttons />
      </div>
    );
  }
}

export default App;
