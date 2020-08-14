import React from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home'
import NvarBar from './components/pageLayout/navbar';
import Footer from './components/pageLayout/footer';
import About from './components/pages/about'

const App = (props) => {
  return (
    <div id="body" className="App">
      <NvarBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  )
}


export default withRouter(App);