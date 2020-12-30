import React from 'react';
import { NavLink } from 'react-router-dom';

class GeneralNavBar extends React.Component {

    render(){
        return(
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/nfl">NFL</NavLink></li>
                    <li><NavLink to="/nba">NBA</NavLink></li>
                    <li><NavLink to="/mlb">MLB</NavLink></li>
                    <li><NavLink to="/nhl">NHL</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default GeneralNavBar