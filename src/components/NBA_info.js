import React from 'react';
import NBA_news from './NBA/NBA_news'
import NBA_score from './NBA/NBA_score'
import NBA_team_data from './NBA/NBA_team_data'
import NavBar from './NBA/NavBar'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class NBA_info extends React.Component {

    render(){
        return(
            <Router>
                <div>
                    test
                    <NavBar/>
                    <Route exact path="/" component={NBA_news} />
                    <Route exact path="/scores" component={NBA_score} />
                    <Route exact path="/data" component={NBA_team_data} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(NBA_info)