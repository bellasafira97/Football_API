import React, {Component} from 'react';
import flamingo from './../img/flamingo.jpg';

import './../css/Header.css';
class Header extends Component{
    render(){
        return(
        <header>
        {/* img from url */}
        <img src="https://animals.sandiegozoo.org/sites/default/files/styles/view_thumbnail/public/2016-09/animals_hero_lions_0.jpg"
        alt="" style={{height:'auto', width:'300px'}}/>

        {/* img from "./public/" */}
        <img src="img/taytay.jpg" alt="" style={{height:'auto', width:'300px'}}/>

        {/* img from "./src" */}
        <img src={require('./../img/taytay.jpg')} alt="" style={{height:'auto', width:'300px'}}/>
        
        {/* img from "./src" import */}
        <img src={flamingo} alt="" style={{height:'auto', width:'300px'}}/>
        </header>
        );
    }
}

export default Header;