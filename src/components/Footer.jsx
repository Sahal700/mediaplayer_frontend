import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook,faInstagram,faLinkedin,faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
      <div className='container-fluid p-3'>
        <div className='row'>
          <div className="col-md-4 ps-md-5">
            <h4 className='text-warning'>
              <FontAwesomeIcon icon={faVideo} className='me-2' />
              Media PLayer
            </h4>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti assumenda quis id, animi ex aperiam voluptatibus nobis, omnis minima ad. Deserunt voluptas, amet recusandae voluptates quidem praesentium quos odit!</p>
          
          </div>
          <div className="col-md-2 d-flex justify-content-md-center">
            <div>
              <h4>Links</h4>
              <p className='mt-4'><a href="">Landing page</a></p>
              <p><a href="">Home</a></p>
              <p><a href="">Watch History</a></p>
            </div>
          </div>
          <div className="col-md-2">
          <div>
              <h4>Guides</h4>
              <p className='mt-4'><a href="">React</a></p>
              <p><a href="">React bootstrap</a></p>
              <p><a href="">Bootswatch</a></p>
            </div>
          </div>
          <div className="col-md-4 px-md-5">
          <div>
              <h4>Contact Us</h4>
              <div className='d-flex mt-4'>
                <input type="text" className='form-control' placeholder='Emali Id' />
                <button className='btn btn-warning ms-3'>Subscribe</button>
              </div>
              <div className='d-flex justify-content-between mt-4'>
              <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
              <FontAwesomeIcon icon={faFacebook}  className='fa-2x'/>
              <FontAwesomeIcon icon={faLinkedin}  className='fa-2x'/>
              <FontAwesomeIcon icon={faGithub}  className='fa-2x'/>
              <FontAwesomeIcon icon={faTwitter}  className='fa-2x'/>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer