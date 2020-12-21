import React from 'react';
import SportNews from '../components/SportNews'
import SportScores from '../components/SportScores'
import TeamData from '../components/TeamData'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import NavBar from '../components/NavBar';

class UserMainContent extends React.Component {
    renderUserInfo = () => {
        return (
            <div className="student-info">
                <h3>User name: {this.props.user.name}</h3>
            </div>
        )
    }

    renderLogout = () => {
        return (
            <Button className="button" onClick={() => {
                localStorage.clear()
                this.props.history.push('/')
                }}>Log Out
            </Button>
        )
    }

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
                <div className="main-page">
                    {this.renderUserInfo()}
                    {this.renderLogout()} 
                    {this.renderSportNews()}
                    <Route exact path="/scores" component={SportScores} />
                    {this.renderSportScores()}
                    {this.renderTeamData()}
                </div> 
            </Router>
            
        )
    }
}

export default withRouter(UserMainContent)