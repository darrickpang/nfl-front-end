import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import GeneralNavBar from '../components/GeneralNavBar';
import NFL_info from '../components/NFL_info'
import NBA_info from '../components/NBA_info'
import MLB_info from '../components/MLB_info'

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

    render(){
        return(
            <Router>
                <div className="main-page">
                    Welcome to your main page. 
                    {this.renderUserInfo()}
                    {this.renderLogout()} 
                    <GeneralNavBar />
                    <Route exact path="/NFL" component={NFL_info} />
                    <Route exact path="/NBA" component={NBA_info} />
                    <Route exact path="/MLB" component={MLB_info} />
                </div> 
            </Router>
            
        )
    }
}

export default withRouter(UserMainContent)