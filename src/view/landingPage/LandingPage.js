import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">
                Welcome to your Homeschool Progress Portal
              </h1>
              <p className="subtitle">
                One safe place for all your homeschool documents.
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="med" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button 
                    size="med" 
                    className="landingButton" 
                    variant='outline-primary'>
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage