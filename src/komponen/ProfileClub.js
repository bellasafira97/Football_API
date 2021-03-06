import React, {Component} from 'react';
import Axios from 'axios';
import nofoto from './../img/nofoto.jpg'
import {Link} from 'react-router-dom';
import '../App.css'

class ProfileClub extends Component{
    state = {
        players:[],
        loading: <img alt="" src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif"/>,
    }
    componentDidMount(){
        console.log(this.props)
        var klub = this.props.match.params.profileclub
        console.log(klub)
        var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${klub}`;
        Axios.get(link)
        .then((x) => {
            console.log(x)
            this.setState({
                players: x.data.player,
                loading:''
            })
        })
        .catch((x)=> {console.log(x)})
    }
    
    render(){
        var pemain = this.state.players.map((val, i) =>{
            var nama = val.strPlayer;
            var foto = val.strThumb;
            var foto2 = nofoto;
            return(
                <li key={i} className='card col-lg-3 col-md-3 col-xs-3 mt-3'>
                <Link to ={'/player/'+nama}>
                    <img className="card-img-top mt-5" alt="badge" src={foto ? foto : foto2} />
                    <b className="card-text text-center" style={{fontSize:'30px'}}>{nama}</b>
                </Link>
                </li>
            )
            
        })
        return(
            <div className="App">
                <h1>{this.state.url}</h1>
                <div className="container">
                <ul className="row">{pemain}</ul>
                </div>
                <br/>
                {this.state.loading}
            </div>
        );
    }
}
export default ProfileClub;