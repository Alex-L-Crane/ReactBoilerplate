import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import scss from '../styles/index.scss';

class Luna extends Component {
  clickButton() {
    // System.import splits bundle.js files for efficiency
    System.import('./image_viewer').then(module => {});
  }

  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Click me</button>
      </div>
    );
  }
}

class Hello extends Component {
  render() {
    return <div>Hello!</div>;
  }
}

class Goodbye extends Component {
  render() {
    return <div>Goodbye!</div>;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello} />
      <Route path="/goodbye" component={Goodbye} />
      <Luna />
    </div>
  </BrowserRouter>,
  document.querySelector('.app')
);
