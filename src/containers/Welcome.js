import React from "react";
import { Button, Container } from "reactstrap";
import { useHistory } from 'react-router-dom'

const Welcome = () => {
  let history = useHistory()

    return (
      <div style={{backgroundImage: "url(" + require("../image/gettyimages-954979578-2048x2048.jpg") + ")",}} className="page-header">
        <Container className='welcome-page'>
            <h1>Sports App</h1>
            <h3>Find a game.</h3>
            <br />
            <Button className="login-button" onClick={() => history.push('/user_signup')}> User Sign Up</Button>
            <Button className="login-button" onClick={() => history.push('/user_login')}>User Login</Button>
        </Container>
      </div>
  );
}

export default Welcome