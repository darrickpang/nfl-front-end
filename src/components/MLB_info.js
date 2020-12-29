import React from 'react';
import MLB_news from './MLB/MLB_news'
import MLB_score from './MLB/MLB_score'
import MLB_team_data from './MLB/MLB_team_data'
import NavBar from './MLB/NavBar'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class MLB_info extends React.Component {

    render(){
        return(
            <Router>
                <div>
                    test
                    <NavBar/>
                    <Route exact path="/" component={MLB_news} />
                    <Route exact path="/scores" component={MLB_score} />
                    <Route exact path="/data" component={MLB_team_data} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(MLB_info)