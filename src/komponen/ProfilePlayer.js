import React, {Component} from 'react';
import Axios from 'axios';
import nofoto from './../img/nofoto.jpg'
import '../App.css'

class ProfilePlayer extends Component{
    state = {
        players:[],
        loading: <img alt="" src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif"/>,
    }
    componentDidMount(){
        console.log(this.props)
        var pemain = this.props.match.params.profileplayer
        console.log(pemain)
        var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${pemain}`;
        Axios.get(link)
        .then((x) => {
            console.log(x.data.player)
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
            var deskripsi = val.strDescriptionEN;
            var foto2 = nofoto;
            return(
                <li key={i} className='card text-center mt-3' >
                    <img className="card-img-top mt-5 rounded mb-3" style={{width:"500px", margin:"0 auto", height:"100%"}} alt="badge" src={foto ? foto : foto2} />
                    <b className="card-text text-center" style={{fontSize:'50px'}}>{nama}</b><br/>
                    <article className="card-text text-center">{deskripsi}</article>
                
                </li>
            )
            
        })
        return(
            <div className="App">
                <h1>{this.state.url}</h1>
                <div className="container">
                <ul>{pemain}</ul>
                </div>
                <br/>
                {this.state.loading}
            </div>
        );
    }
}
export default ProfilePlayer;