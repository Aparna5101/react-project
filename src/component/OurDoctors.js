import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/doctor4.jpg'
import Img2 from '../photos/doctor2.jpg'
import Img3 from '../photos/doctor6.jpg'
import Img4 from '../photos/doctor5.jpg'
import Img5 from '../photos/doctor7.jpg'
class OurDoctors extends Component {
    
    render() { 
        return (     <div>
            <Carousel className ="container" style={{paddingLeft:100 ,paddingRight:100}}>
                <Carousel.Item  >
                <Card>
                <Card.Img variant="top" height="500" src={Img1} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr.Dharshini</Card.Title>
                  <Card.Subtitle>Oncologist</Card.Subtitle>
                  <Card.Text>
                    Specialist in chemotherapy.
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card>
                <Card.Img variant="top" height="300" src={Img2} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr.Dhivyashree</Card.Title>
                  <Card.Subtitle>Neurosurgeon</Card.Subtitle>
                  <Card.Text>
                    Specialist in spinal cord tumours
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                <Carousel.Item >
                <Card>
                <Card.Img variant="top" height="300" src={Img3} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr.Adhithiyan</Card.Title>
                  <Card.Subtitle>Orthopedic</Card.Subtitle>
                  <Card.Text>
                    Specialist in treatment musculoskeletal system
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                <Carousel.Item >
                <Card>
                <Card.Img variant="top" height="300" src={Img4} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr.Harishri</Card.Title>
                  <Card.Subtitle>Dermatologist</Card.Subtitle>
                  <Card.Text>
                    Specialist in the health of your skin.
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item> <Carousel.Item >
                <Card>
                <Card.Img variant="top" height="300" src={Img5} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr.Amirtha</Card.Title>
                  <Card.Subtitle>Endocrinologist</Card.Subtitle>
                  <Card.Text>
                  Treating people with diabetes
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                </Carousel>
                <br/>
                <br/>
                
                </div> );
    }
}
 
export default OurDoctors;