import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 d-lex justify-content-center align-items-center'>
        <Col md={6}>
          <h3 className='mt-md-5'>Welcome to <span className='text-warning'>Media player</span></h3>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatibus expedita nulla fuga? Hic saepe voluptatem ullam nihil quaerat? Esse maiores repudiandae incidunt iure consectetur nobis sapiente alias accusamus sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum consectetur numquam ex temporibus explicabo doloribus ut. Laudantium nemo non modi totam blanditiis,</p>
          <Link to={'/home'}><button className='btn btn-warning mt-5'>Get started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
        <img src="https://cdn.pixabay.com/photo/2017/06/09/06/07/record-player-2385850_1280.png" className='w-75' /></Col>
      </Row>
    </Container>
    <Container className='mt-5'>
      <h2 className='text-center'>Features</h2>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row className='mt-5 d-flex justify-content-center align-items-center'>
            <Col md={4} className='p-3'>
            <Card className='p-3' style={{ width: '100%' }}>
              <Card.Img variant="top" style={{height:"200px"}} src="https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='p-3'>
            <Card className='p-3' style={{ width: '100%' }}>
              <Card.Img variant="top" style={{height:"200px"}} src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='p-3'>
            <Card className='p-3'  style={{ width: '100%' }}>
              <Card.Img variant="top" style={{height:"200px"}} src="https://i.pinimg.com/originals/1d/73/5a/1d735ad8eee8350adc96d50e1421ee6d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    <div className='container'>
      <div className='row p-md-5 p-3'>
        <div className='col border border-secondary border-2 rounded p-md-5 p-3'> 
          <div className='row'>
            <div className="col-md-6">
            <h3 className='text-warning'>Simple fast and PowerFul</h3>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
              <p><span className='fs-4'>Play Everything</span>:amet consectetur adipisicing elit. Nam architecto ad consectetur, animi iusto eius unde impedit labore blanditiis laudantium</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <iframe width="100%" height="380" src="https://www.youtube.com/embed/rFgS10V8908" title="ARM (Malayalam) - Trailer |Tovino Thomas,Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing