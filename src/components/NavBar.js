import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render(){
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/scores">Scores</NavLink>
                <NavLink to="/data">Team Data</NavLink>
            </div>
        )
    }
}

export default NavBar