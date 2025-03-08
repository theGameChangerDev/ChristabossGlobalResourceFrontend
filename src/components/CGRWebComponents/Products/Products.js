import React from 'react'
import './Products.css'
import Card from 'react-bootstrap/Card'

function Products() {
    return (
        <div className='App'> 
            <div className='wrapHeader'>
                <div className='container'>
                    <div className='grid-12'>
                        
                        <h1>OUR PRODUCTS</h1>

                    </div>
                </div>
            </div>

            <div className='products'>
            <div className='container'>
               <div className='row-1'>
                   <div className='col-4'>
                       <div className='card-width'>
                           <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/concrete blocks.jpg" />
                                <Card.Body>
                                    <h5>CONCRETE BLOCKS</h5>
                                    
                                </Card.Body>
                           </Card>  
                       </div>
                        
                    </div>
                    <div className='col-4'>
                        <div className='card-width'>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../images/cement3.jpg" />
                            <Card.Body>
                                <h5>CEMENT</h5>
                            
                            </Card.Body>
                        </Card>
                        </div>
                          
                    </div><div className='col-4'>
                        <div className='card-width'>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../images/sand1.jpg" />
                            <Card.Body>
                                <h5>SAND</h5>
                                   
                            </Card.Body>
                            </Card> 
                        </div>
                            
                        
                    </div>


                </div>
                <div className='row-2'>
                    <div className='col-4'>
                        <div className='card-width'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/granite1.jpg" />
                                <Card.Body>
                                    <h5>GRANITE</h5>
                                    
                                </Card.Body>
                            </Card>  

                        </div>
                        
                    </div>
                    <div className='col-4'>
                        <div className='card-width'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/pavingStones1.jpg" />
                                <Card.Body>
                                    <h5>PAVING STONES</h5>
                                    
                                </Card.Body>
                            </Card>  
                        </div>
                            
                       
                        
                    </div><div className='col-4'>
                        <div className='card-width'>
                             <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../images/louvres.jpg" />
                            <Card.Body>
                                <h5>LOUVRES</h5>
                                
                            </Card.Body>
                        </Card>  
                        </div>
                       
                    </div>
                    
                </div>
                <div className='row-2'>
                    <div className='col-4'>
                        <div className='card-width'>

                             <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../images/aluminiumRoofingSheet2.jpg" />
                            <Card.Body>
                                <h5>ALUMINIUM ROOFING SHEETS</h5>
                                
                            </Card.Body>
                        </Card>  
                        </div>
                       
                    </div>
                    <div className='col-4'>
                        <div className='card-width'>
                             <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../images/Pipes.jpg" />
                            <Card.Body>
                                <h5>PIPES</h5>
                                
                            </Card.Body>
                           </Card>
                        </div>
                         
                    </div><div className='col-4'>
                        <div className='card-width'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="../images/Tiles2.jpg" />
                                <Card.Body>
                                    <h5>TILES</h5>
                                    
                                </Card.Body>
                            </Card> 

                        </div>
                         
                    </div>
                    
                </div>
                
            </div>

            </div>
            
        
        </div>
        
        
    )
}

export default Products
