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
                    <p>{score.name}</p>
                    )}
            </div>
        )
    }
}

export default MLB_score