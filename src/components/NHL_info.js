import React from 'react';
import NHL_news from './NHL/NHL_news'
import NHL_score from './NHL/NHL_score'
import NHL_team_data from './NHL/NHL_team_data'
import NavBar from './NHL/NavBar'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class NFL_info extends React.Component {

    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/news" component={NHL_news} />
                    <Route exact path="/scores" component={NHL_score} />
                    <Route exact path="/data" component={NHL_team_data} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(NFL_info)