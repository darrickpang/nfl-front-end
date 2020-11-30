import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

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
            <div className="main-page">
                {/* <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">Calendar</a></li>
                    <li><a href="#contact">Test</a></li>
                    <li><a href="#about">About</a></li>
                </ul> */}
                {this.renderUserInfo()}
                {this.renderLogout()} 
            </div>
        )
    }
}

export default withRouter(UserMainContent)