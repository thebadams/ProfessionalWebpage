import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
const LandingPage = () => {
  return (
    <Jumbotron className="text-center" >
      <Container>
        <Row >
        <Col className="mx-5">
      <Image className="jumbotron-pic my-5"  style={{height: '400px',
    width: '400px',}} src="./assets/images/profilepic.jpeg" alt="brianadams" roundedCircle />
    </Col>
     <Col className= "align-items-center my-auto">
     <p className= "lead">Web Developer</p>
    <p className="lead">Music, Skiing, Dungeons and Dragons Enthusiast</p>
    <hr className="my-4"/>
    <p>READY TO LEARN</p>
    <Button  block variant="primary" href="/aboutme" className="landing-page-btn btn" size="lg">Learn More</Button></Col> 
      </Row>
      
      </Container>
      
    

    </Jumbotron>
    //  <div class="jumbotron text-center">'
    //     <img src="./assets/images/profilepic.jpeg" alt="" class="profile-pic my-3" />
    //     <p class="lead">Web Developer. Music, Skiing, and Dungeons and Dragons Enthusiast</p>
    //     <hr class="my-4" />
    //     <p>Eager to Learn</p>
    //     <a class="btn btn-lg landing-page-btn" href="./assets/html/about-me.html" role="button">Learn More</a>
    // </div>
  )
}

export default LandingPage;
