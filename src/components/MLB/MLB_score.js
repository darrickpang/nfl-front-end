import React from 'react';

class MLB_score extends React.Component {
    state = {
        scores: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard')
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
                {this.state.scores.map(score => 
                    <p>{score.name}: {score.competitions[0].competitors[1].score} - {score.competitions[0].competitors[0].score}</p>
                    )}
            </div>
        )
    }
}

export default MLB_score