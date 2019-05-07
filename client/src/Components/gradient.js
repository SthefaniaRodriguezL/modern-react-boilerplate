import React, { Component } from 'react';

class Gradient extends React.Component {
  constructor() {
    super();
    this.state = {
    colors: undefined
    }
    this.firstColor = this.firstColor.bind(this);
    this.colorOne = this.colorOne.bind(this);
    this.colorTwo = this.colorTwo.bind(this);
  }
   firstColor() {
     var randomColourOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var randomColourTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var background = document.getElementById("myCanvas")
    background.style.backgroundImage = "-webkit-linear-gradient("+ randomColourOne +" , "+ randomColourTwo +")"
  }
   colorOne() {
     var randomColourOne = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var background = document.getElementById("colorOne")
     background.style.backgroundColor =  randomColourOne
   }
   colorTwo() {
     var randomColourTwo = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
     var background = document.getElementById("colorTwo")
     background.style.backgroundColor = randomColourTwo

   }


  render() {
    return (
      <div>
        <div>
          <div><h5>STYLE:</h5></div>
          <button type="Radial">Radial</button>
        </div>
        <div>
          <div><h5>DIRECTION:</h5></div>
          <button type="Top">Top</button>
          <button type="TopRight">Top Right</button>
          <button type="Right">Right</button>
          <button type="BottomRight">Bottom right</button>
        </div>
        <div>
          <button type="Bottom">Bottom</button>
          <button type="BottomLeft">Bottom left</button>
          <button type="Left">Left</button>
          <button type="TopLeft">Top left</button>
        </div>
          <div>
            <div><h5>COLORS:</h5></div>
            <div id="colorOne"></div>
            <button type="colorOne" onClick={this.colorOne}>colorOne</button>
            <div id="colorTwo"></div>
            <button type="colorTwo" onClick={this.colorTwo}>colorTwo</button>
          </div>
            <button type="button" onClick={this.firstColor}>pick color</button>
            <canvas id="myCanvas" width="200" height="100">
             Your browser does not support the HTML5 canvas tag.
            </canvas>
          <div>
            <div><h5>COLOR FORMAT:</h5></div>
            <button type="Hex">Hex</button>
            <button type="Rgb">Rgb</button>
           </div>
        </div>
    );
  }

}
export default Gradient;
