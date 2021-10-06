import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Content = () => {
    return (
        <div>
            <style type="text/css">
                {`
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
                .formal {
                    font-family: 'Raleway', sans-serif;
                    font-size: 60px;
                }

                .formal2{
                    font-family: 'Raleway', sans-serif;
                }

                .cursive {
                    font-family: 'Alex Brush', cursive;
                    color: #bd8c22;
                    font-size: 100px;
                }
                .underline{
                    text-underline-offset: 5px;
                }
                `}
            </style>
            <Container>
                <Row>
                    <Col lg={true} className="d-flex flex-column align-items-center px-10">
                        <h1 className = "formal">
                            GROW YOUR <br/> 3D & VISUAL EFFECTS<br/>
                            <p className = "cursive">Skill</p> 
                        </h1>
                        <h1>
                            *
                        </h1>
                    </Col>
                    <Col lg={true} className="d-flex justify-content-center align-items-center">
                        <img src="./assets/plantGraphic.png" alt="" className="img-fluid w-85 h-100"/>
                        
                    </Col>
                    <Col lg={true} className="d-flex flex-column justify-content-start align-items-center">
                        <p className = "formal2 p-5 text-start">LEARN VISUAL EFFECTS FOR <br/> 
                        EVERYTHING FROM <br/>BEGINNER TO <br/>
                        ADVANCED-LEVEL TRAINING <br/>
                        <br/>
                        <a className = "text-decoration-none text-black text-decoration-underline underline" href = "./">READ MORE</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content
