import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render(){
        return(
            <div>
                <ul>
                    <li><NavLink to="/">News</NavLink></li>
                    <li><NavLink to="/scores"> Scores</NavLink></li>
                    <li><NavLink to="/data">Team Data</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavBar