import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

class Sport extends React.Component {
    state = {
        news: []
    }

    getScores = () => {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
    }

    getNews = () => {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
            .then(response => response.json())
            .then(data => {
            this.setState({
                news: data
            })
        })
    }

    render(){
        return(
            <div>
                Sport.js
                {this.state.news}
            </div>
        )
    }
}

export default Sport 