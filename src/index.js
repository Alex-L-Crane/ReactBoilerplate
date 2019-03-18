import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import scss from '../styles/index.scss';
import profiles from './data/profiles.json';

class App extends Component {
  state = {
    users: [
        {
          "id": 1,
          "artistName": "Nils Frahm",
          "location": "Germany",
          "genres": ["Dance", "Electronic", "Ambient"]
        },
        {
          "id": 2,
          "artistName": "Deftones",
          "location": "USA",
          "genres": ["Metal", "Nu Metal", "Rock"]
        }
    ]
  }
}

class Profile extends Component {
  render() {
    const profileId = this.props.match.params.id;

    /*const profile = profiles.map((profile, i) => {
          let curProfile = profiles[i];
          if(curProfile['id'] === 1){
              return curProfile
          }
    });*/

    return (
      <div>
        <h2>Profile: {profiles[profileId - 1].artistName}</h2>
        {console.log(profiles[profileId - 1].artistName)}
      </div>
    );
  }
}

class Profiles extends Component {
  render() {
    const profileElement = profiles.map((profile, i) => {
        return (
          <div key={i}>
            <Link
                to={{ pathname: '/' + profile.id}}
                key={profile.id}>
                {profile.artistName}
            </Link>
          </div>
        )
    });
    return (
      <div>
          <h1>Profiles</h1>
          <div className="list-group">
            <div>
              {profileElement}
            </div>
          </div>
      </div>
    );
  }
}

class Releases extends Component {
  render() {
    return (
      <div>
        <h2>Releases</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Profiles</Link>
        </li>
        <li>
          <Link to="/Releases">Releases</Link>
        </li>
      </ul>

      <div>
        <Switch>
          <Route path="/Releases" component={Releases} />
          <Route
            path="/:id"
            component={Profile}
          />
          <Route path="/" component={Profiles} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>,
  document.querySelector('.app')
);
