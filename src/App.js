import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Route} from 'react-router-dom';
import Beranda from './komponen/Beranda';
import ProfileClub from './komponen/ProfileClub';
import ProfilePlayer from './komponen/ProfilePlayer';
import Footer from './komponen/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Link to={'/'}>
        <h1 className="mt-3 container">Footballclub.com</h1>
        </Link>
        <div>
          <Route exact path='/' component={Beranda}/>
          {/* contoh dinamic router adalah /:profileclub */}
          <Route path='/team/:profileclub' component={ProfileClub}/>
          <Route path='/player/:profileplayer' component={ProfilePlayer}/>
          <Route path='/' component={Footer}/>
        </div>
      </div>
    );
  }
}
export default App;