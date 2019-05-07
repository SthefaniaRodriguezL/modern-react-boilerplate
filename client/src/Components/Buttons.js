import React, { Component } from 'react';
import Gradient from './gradient';

class Buttons extends React.Component {
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
         <button type="button">colors no name</button>
         <button type="button">colors no name</button>
       </div>
       <div>
         <div><h5>COLOR FORMAT:</h5></div>
         <button type="Hex">Hex</button>
         <button type="Rgb">Rgb</button>
       </div>
       <div>
         <Gradient />
       </div>
      </div>
    );
  }
}

export default Buttons;
