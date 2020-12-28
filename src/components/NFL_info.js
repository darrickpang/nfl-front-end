import React from 'react';
import SportNews from './NFL/SportNews'
import SportScores from './NFL/SportScores'
import TeamData from './NFL/TeamData'
import NavBar from './NFL/NavBar'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

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
            <Router>
                <div>
                    test
                    <NavBar/>
                    <Route exact path="/" component={SportNews} />
                    <Route exact path="/scores" component={SportScores} />
                    <Route exact path="/data" component={TeamData} />
                </div>
            </Router>
            
        )
    }
}

export default withRouter(NFL_info)