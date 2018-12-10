import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Route} from 'react-router-dom';
import Kontak from './komponen/Kontak';
import Beranda from './komponen/Beranda';
import ProfileClub from './komponen/ProfileClub';
class App extends Component{
  render(){
    return(
      <div>
        <Link to={'/'}>
        <h1>footballCLUB.com</h1>
        </Link>
        <div>
          <Route exact path='/' component={Beranda}/>
          {/* contoh statik route adalah /kontak */}
          <Route path='/kontak' component={Kontak}/>
          {/* contoh dinamic router adalah /:profileclub */}
          <Route path='/team/:profileclub' component={ProfileClub}/>
        </div>
      </div>
    );
  }
}
export default App;