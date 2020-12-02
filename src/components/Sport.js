import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

class Sport extends React.Component {
    getScores = () => {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
    }

    getNews = () => {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
    }

    render(){
        return(
            <div>
                Sport.js
                {this.getScores()}
            </div>
        )
    }
}

export default Sport 