import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component(){
    render(){
        return (
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/s">Movies</NavLink>
                <NavLink to="/directors">Directors</NavLink>
                <NavLink to="/actors">Actors</NavLink>
            </div>
        );
    }
};

export default NavBar;