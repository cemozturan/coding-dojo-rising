import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDemo: false
    };
    this.toggleDemo = this.toggleDemo.bind(this);
  }

  toggleDemo() {
    this.setState(function(prevState) {
      return {
        showDemo: !prevState.showDemo
      };
    });
  }

  render() {
    return (
      <div className="app">
        <button style={{float: "left"}} onClick={this.toggleDemo}>Demo</button>
        {this.state.showDemo && <img className="demo-gif" src={require('./assets/demo.gif')} />}
      </div>
    );
  }
}

export default App;
