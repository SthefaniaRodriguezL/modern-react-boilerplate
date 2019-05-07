import React, { Component } from 'react';

class Gradient extends React.Component {
  constructor() {
    super();
    this.state = {
    colors: undefined
    }
    this.getGenerator = this.getGenerator.bind(this);

  }
  componentWillMount() {
    this.getGenerator()
  }
   getGenerator() {
     const url = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json' ;
     fetch(url).then(response =>
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    console.log(res.status, res.data)
    this.setState({colors:res.data})
}))
}
// create another function to go insicdde the big object and from there for it can allow you to go inside the array(use the .map method) and from there you can get access to small objects and start doing more processes.
  getGradient() {
    console.log(this.state.rsp.map(object));
  }

  render() {
console.log("i am dataaaaaa" + this.state.colors)
    return (
      <div>

        </div>
    );
  }

}
export default Gradient;
