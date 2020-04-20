import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/snippets/Header';
import Home from './component/Home';
import HowItWork from './component/HowItWork';
import Footer from './component/snippets/Footer';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/how-it-work" component= {HowItWork}/>
            <Route exact path="/"  component={Home} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
