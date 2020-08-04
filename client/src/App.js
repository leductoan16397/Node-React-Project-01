import React from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home'
import NvarBar from './components/navbar';
import Footer from './components/footer';

const App = (props) => {
  return (
    <div id="body">
      <NvarBar />
      <div id="main" className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}


export default withRouter(App);