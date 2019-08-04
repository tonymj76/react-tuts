import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  // constructor(props){
  //   super(props)
  //     this.state = {
  //       anwser: 43,
  //     };
  // }
  state = {
    answer: 43,
  }
  
  asyncFunc = () => {
    return Promise.resolve(37);
  };
  async componentDidMount(){
    // Note he is not handling the error which may return to look at try and catch 
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h2>Hello React --{this.state.answer}</h2>
    )
  }
}

render(<App/>, document.getElementById('root')); 