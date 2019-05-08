import React, { Component } from 'react';

var randomColourOne=undefined
var randomColourTwo=undefined

class Gradient extends React.Component {
  constructor() {
    super();
    this.state = {
    colorOne: undefined,
    colorTwo: undefined
    }
    this.firstColor = this.firstColor.bind(this);
    this.colorOne = this.colorOne.bind(this);
    this.colorTwo = this.colorTwo.bind(this);
  }

   firstColor() {

     var background = document.getElementById("myCanvas")
    background.style.backgroundImage = "-webkit-linear-gradient("+ this.state.colorOne +" , "+ this.state.colorTwo +")"
    console.log("i am current stateeeeee when clicked" + this.state.colorOne);
  }
   colorOne() {
      randomColourOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var background = document.getElementById("colorOne")
     background.style.backgroundColor =  randomColourOne
     this.setState({
       colorOne: randomColourOne})
   }
   colorTwo() {
     randomColourTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var background = document.getElementById("colorTwo")
     background.style.backgroundColor = randomColourTwo
     this.setState({
       colorTwo: randomColourTwo})
   }

  render() {
    console.log(this.state);
    return (
      <div className='main'>
      <div className='first'>
        <div>
          <div><h5>STYLE:</h5></div>
          <button type="Radial">Radial</button>
        </div>
        <div>
          <div><h5>DIRECTION:</h5></div>
          <button type="DirectionRight">Top</button>
          <button type="DirectionRight">Top Right</button>
          <button type="DirectionRight">Right</button>
          <button type="DirectionRight">Bottom right</button>
        </div>
        <div>
          <button type="Bottom">Bottom</button>
          <button type="BottomLeft">Bottom left</button>
          <button type="Left">Left</button>
          <button type="TopLeft">Top left</button>
        </div>
        <div>
          <div><h5>COLOR FORMAT:</h5></div>
          <button type="Hex">Hex</button>
          <button type="Rgb">Rgb</button>
         </div>
          <div>
            <div><h5>COLORS:</h5></div>
            <div id="colorOne"></div>
            <button type="colorOne" onClick={this.colorOne}>colorOne</button>
            <div id="colorTwo"></div>
            <button type="colorTwo" onClick={this.colorTwo}>colorTwo</button>
          </div>
            <button type="button" onClick={this.firstColor}>pick color</button>
          </div>
          <div>
            <canvas id="myCanvas">
             Your browser does not support the HTML5 canvas tag.
            </canvas>
          </div>

        </div>
    );
  }

}
export default Gradient;
