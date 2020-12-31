import React from 'react';

class NHL_team_data extends React.Component {
    state = {
        teams: []
    }

    componentDidMount() {
        fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
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

export default NHL_team_data