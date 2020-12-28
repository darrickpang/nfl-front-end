import React from 'react';
import NBA_news from './NBA/NBA_news'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class NFL_info extends React.Component {

    renderSportNews = () => {
        return(
            <div>
                <NBA_news/>
            </div>
        )
    }

    render(){
        return(
            <Router>
                <div>
                    test
                    <NavBar/>
                    <Route exact path="/" component={SportNews} />
                    <Route exact path="/scores" component={SportScores} />
                    <Route exact path="/data" component={TeamData} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(NFL_info)