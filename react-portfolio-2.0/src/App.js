import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
// import Intro from './components/Intro/Intro'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { Route, Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={'/'}><About /></Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
