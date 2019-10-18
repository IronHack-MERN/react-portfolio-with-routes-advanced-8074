import React, { Component }from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import {projects as Projects} from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import queryString from 'query-string'


class App extends Component {

  componentDidMount() {
    const values = queryString.parse(this.props)
    console.log('*************** aquí el value ***************');
    console.log(values);
    console.log('*************** fin del value ***************');
    console.log(values.place); // "Barcelona"
    console.log(values.destType); // "hotel"
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/projects/:id' component={ProjectDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
