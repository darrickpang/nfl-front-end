import React from 'react';
import NBA_news from './NBA/NBA_news'
import NavBar from './NBA/NavBar'
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
                    <Route exact path="/" component={NBA_news} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(NFL_info)