import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clean from './Clean';
import Final from './Final';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Clean} />
              <Route path="/final" component={Final} />/>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
