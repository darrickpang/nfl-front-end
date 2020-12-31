import React from 'react';

class TeamData extends React.Component {
    state = {
        teams: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
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
                {this.state.teams.map(team => 
                    <p>{team.team.displayName}: {team.team.record.items[0].summary}</p>
                    )}
            </div>
        )
    }
}

export default TeamData