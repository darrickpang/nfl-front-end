import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

class SportNews extends React.Component {
    state = {
        news: []
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
                {this.state.news.map(article => 
                    <p><a href={article.links.web.href}>{article.description}</a></p>
                    )}
            </div>
        )
    }
}

export default SportNews