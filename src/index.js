import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import scss from '../styles/index.scss';

class StaticImage extends Component {
  clickButton() {
    // System.import splits bundle.js files for efficiency
    System.import('./static_image').then(module => {});
  }

  render() {
    return (
      <div>
        <h2>Render static image</h2>
        <button onClick={this.clickButton}>Show image</button>
        <div className="luna-wrapper" />
      </div>
    );
  }
}

class Unsplash extends Component {
  render() {
    return (
      <div>
        <h2>Unsplash images</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Static Image</Link>
        </li>
        <li>
          <Link to="/unsplash-feed">Unsplash Images</Link>
        </li>
      </ul>

      <div>
        <Switch>
          <Route path="/unsplash-feed" component={Unsplash} />
          <Route path="/" component={StaticImage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>,
  document.querySelector('.app')
);
