import React from 'react';
import { NavLink } from 'react-router-dom';

class GeneralNavBar extends React.Component {

    render(){
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/nfl">NFL</NavLink>
                <NavLink to="/nba">NBA</NavLink>
                
            </div>
        )
    }
}

export default GeneralNavBar