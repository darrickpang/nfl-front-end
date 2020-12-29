import React from 'react';

class NBA_team_data extends React.Component {
    state = {
        teams: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
            .then(response => response.json())
            .then(data => {
            this.setState({
                teams: data.sports[0].leagues[0].teams
            })
        })
    }

    render(){
        return(
            <div>
                team.js
                {this.state.teams.length}
                {this.state.teams.map(team => 
                    <p>{team.team.displayName}: {team.team.record.items[0].summary}</p>
                    )}
            </div>
        )
    }
}

export default NBA_team_data