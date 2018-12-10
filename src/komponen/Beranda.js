import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Beranda extends Component{
      //state
  constructor(){
    super()
    this.state = {
      loading: <img alt="" src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif"/>,
      klub: [],
    }
  }
    // componentDidMount() adalah untuk mengambil secara langsung API data
    componentDidMount(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        axios.get(url)
        .then((x) => {
            this.setState({
                klub: x.data.teams,
                loading: '',
            })
        })
        .catch((x)=> {console.log(x)})
    }

    opsiliga = (x) =>{
        this.setState({
            loading: <img alt="" src="https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif"/>,
            klub: [],
        })
        var url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?${x}`;
        axios.get(url)
        .then((x) => {
            this.setState({
                klub: x.data.teams,
                loading:''
            })
        })
        .catch((x)=> {console.log(x)})
    }

    render(){
        var galeri = this.state.klub.map((val, i) =>{
            var nama = val.strTeam;
            var logo = val.strTeamBadge;
            
            return(
                <li key={i} className='card col-lg-3 col-md-3 col-xs-3'>
                <Link to={'/team/'+nama}>
                    <img className="card-img-top mt-5" alt="badge" src={logo} />
                    <b className="card-text text-center" style={{fontSize:'30px'}}>{nama}</b>
                </Link>
                </li>
            )
        })
        return(
            <div>
                <h4>Ini Beranda</h4>
                <select className="mb-5" onChange={(e)=>{
                    console.log(e.target.value);
                    this.opsiliga(e.target.value)
                    }
                }>
                    <option value='s=Soccer&c=spain'> Laliga Spanyol</option>
                    <option value='l=English%20Premier%20League'> Premier Leage</option>
                    <option value='l=German%20Bundesliga'> Laliga Spanyol</option>
                </select>
                {this.state.loading}
                <div className="container">
                <ul className='row text-center'>{galeri}</ul>
                </div>
                
            </div>
        );
    }
}
export default Beranda;