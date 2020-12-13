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
                scores: data.events
            })
        })
    }

    render(){
        return(
            <div>
                SportScores.js
                {this.state.scores.map(score => 
                    <p>{score.name}</p>
                    )}
            </div>
        )
    }
}

export default SportScores