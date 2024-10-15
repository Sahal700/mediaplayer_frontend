import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar className="bg-transparent">
        <Container>
          <Link style={{textDecoration:"none"}} to={'/'}>
          <Navbar.Brand className='text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} beat className='text-warning me-3' />
              <span className='text-warning'>Media PLayer</span>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header