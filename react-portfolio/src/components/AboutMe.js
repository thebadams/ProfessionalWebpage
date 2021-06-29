import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
const AboutMe = () => {
  return (
      <Container className="text-center">
          <Row>
              <h1 className="display-3">About Me</h1>
          </Row>
          <Row className="align-middle">
            <Col style={{height:"100vh"}}>
              <Card style={{height: "100%"}}>
                  <Card.Text>
                      Hello, my name is Brian, and I’m a web developer. Born, raised, and currently located in Central New Jersey, I bring that tenacious Jersey attitude to all my work. Put my head down, and just do the work.
                  </Card.Text>
              </Card>
            </Col>
            <Col>
                <Card>
                  <Card.Text>
                      Hello, my name is Brian, and I’m a web developer. Born, raised, and currently located in Central New Jersey, I bring that tenacious Jersey attitude to all my work. Put my head down, and just do the work.
                  </Card.Text>
                </Card>
            </Col>
            <Col>
            <Card>
                  <Card.Text>
                      Hello, my name is Brian, and I’m a web developer. Born, raised, and currently located in Central New Jersey, I bring that tenacious Jersey attitude to all my work. Put my head down, and just do the work.
                  </Card.Text>
              </Card>
            </Col>
            <Col>
             <Card>
                  <Card.Text>
                      Hello, my name is Brian, and I’m a web developer. Born, raised, and currently located in Central New Jersey, I bring that tenacious Jersey attitude to all my work. Put my head down, and just do the work.
                  </Card.Text>
              </Card>
            </Col>
          </Row>
          <Row>
              
          </Row>
          <Row>
              
          </Row>
          <Row>
             
          </Row>
      </Container>
//     <div className="container text-center my-4">
    
//     <div className="row">
//         <h1 className="display-3 col-12">About Me</h1>
//         {/* <div className="col-12 col-lg-4 profile-pic-div justify-content-around">
//             <img src="./assets/images/profilepic.jpeg" className="profile-pic fixed-image mx-auto my-4" />
//         </div> */}
//         <div className="row col-12 col-lg-8">
//             <div className="card card-body my-3">
//                 <p className="lead card-text">Hello, my name is Brian, and I’m a web developer. Born, raised, and currently located in Central New
//                     Jersey, I bring that tenacious Jersey attitude to all my work. Put my head down, and just do the work.</p>
//             </div>
//             <div className="card card-body my-3">
//                 <p className="lead card-text">In my heart, I’m a creative person with a logical mindset. I see a problem set before me, and my
//                     first instinct is to
//                     break it down into its constituent parts and just tackle the problem. I want to create; to look at something and
//                     say “I
//                     MADE THIS.”</p>
//             </div>
//             <div className="card card-body my-3">
//                 <p className="lead card-text">My inspiration for programming comes from my major hobbies:
//                 <ul className="lead">
//                     <li>Tabletop Roleplaying Games, such as Dungeons and Dragons</li>
//                     <li>Skiing and Mountain Biking</li>
//                     <li>Fitness</li>
//                 </ul>
                
//                 Each of these hobbies can benefit greatly from the web applications being built in the modern world, and it’s my
//                 goal to
//                 play a part in the development of these tools.</p>
//             </div>
//             <div className="card card-body my-3">
//                 <p className="lead">With a keen interest in Full Stack development, and a concentration in JavaScript and the plethora
//                     of tools that it
//                     brings to the table for web application development, I am always pushing myself to learn new concepts, new
//                     technologies,
//                     and new methodologies to broaden my programming skills.
//                 </p>
//             </div>
            
            
//         </div>
               
//     </div>
    
    
// </div>
  )
}

export default AboutMe;
