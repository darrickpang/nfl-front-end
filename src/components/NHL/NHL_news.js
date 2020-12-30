import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

class NHL_news extends React.Component {
    state = {
        news: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
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
                    <p><a href={article.links.web.href}>{article.description}</a></p>
                    )}
            </div>
        )
    }
}

export default NHL_news