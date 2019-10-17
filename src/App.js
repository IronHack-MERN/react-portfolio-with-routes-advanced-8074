import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Switch, Route } from 'react-router-dom';
import NavLink from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects}/>
      </Switch>
    </div>
  );
}

export default App;
