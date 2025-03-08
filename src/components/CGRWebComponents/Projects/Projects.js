import React from 'react'
import Card from 'react-bootstrap/Card'
import './Projects.css'

function Projects() {
    return (
        <div className='projectsheader'>
            <div className='headerwrApper'>
                <div className='container'>
                    <h1 className='page'>OUR PROJECTS</h1>
                   
                </div>
            </div>

            <div className='projects'>
                <div className='container'>
                    <div className='row1'>
                        <div className='col-6'>
                        <Card style={{ width: '27rem' }}>
                            <Card.Img variant="top" src="../images/buildProj1.jpg" />
                            <Card.Body>
                                <h5>Supply ongoing for a 3Bedroom flat project</h5>
                                
                            </Card.Body>
                        </Card> 



                        </div>

                    </div>

                </div>

            </div>



        </div>
        
    )
}

export default Projects
