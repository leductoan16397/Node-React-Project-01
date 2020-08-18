import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home'
import NvarBar from './components/pageLayout/navbar';
import Footer from './components/pageLayout/footer';
import About from './components/pages/about'
import Contact from './components/pages/contact';
import Service from './components/pages/service';
import Blogs from './components/pages/blogs';
import Elements from './components/pages/elements';
import styles from './App.module.scss'

const App = (props) => {
  return (
    <div id="body" className={styles.body}>
      <NvarBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/elements" component={Elements} />
      </Switch>
      <Footer />
    </div>
  )
}


export default withRouter(App);