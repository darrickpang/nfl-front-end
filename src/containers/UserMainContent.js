import React from 'react';
import SportNews from '../components/NFL/SportNews'
import SportScores from '../components/NFL/SportScores'
import TeamData from '../components/NFL/TeamData'
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import GeneralNavBar from '../components/NFL/NavBar';

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
                    {/* {this.renderSportNews()}
                    {this.renderSportScores()}
                    {this.renderTeamData()} */}
                    <GeneralNavBar />
                    <Route exact path="/" component={SportNews} />
                    <Route exact path="/scores" component={SportScores} />
                    <Route exact path="/data" component={TeamData} />
                </div> 
            </Router>
            
        )
    }
}

export default withRouter(UserMainContent)