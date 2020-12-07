import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

class SportNews extends React.Component {
    state = {
        news: []
    }

    getScores = () => {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
            .then(response => response.json())
            .then(data => {
            this.setState({
                news: data.articles
            })
        })
    }

    render(){
        return(
            <div>
                SportNews.js
                {this.state.news.map(article => 
                    <p>{article.description}</p>
                    )}
            </div>
        )
    }
}

export default SportNews