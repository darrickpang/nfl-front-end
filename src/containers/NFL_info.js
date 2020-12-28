import React from 'react';
import SportNews from '../components/NFL/SportNews'
import SportScores from '../components/NFL/SportScores'
import TeamData from '../components/NFL/TeamData'

class NFL_info extends React.Component {

    renderSportNews = () => {
        return(
            <div>
                <SportNews/>
            </div>
        )
    }

    renderSportScores = () => {
        return(
            <div>
                <SportScores/>
            </div>
        )
    }

    renderTeamData = () => {
        return(
            <div>
                <TeamData/>
            </div>
        )
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default NFL_info