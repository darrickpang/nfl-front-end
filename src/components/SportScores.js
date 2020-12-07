import React from 'react';

class SportScores extends React.Component {
    state = {
        scores: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
            .then(response => response.json())
            .then(data => {
            this.setState({
                scores: data.articles
            })
        })
    }

    render(){
        return(
            <div>
                SportScores.js
                {this.state.news.map(article => 
                    <p>{article.description}</p>
                    // <p>{article.links.web.href}</p>
                    )}
            </div>
        )
    }
}

export default SportScores