import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <Navbar className="bg-info position-fixed w-100" style={{zIndex:1}}>
          <Container>
            <Navbar.Brand style={{color: 'white'}} className='fw-bolder fs-5'>
              <i className="fa-solid fa-music me-2"></i>
              Media Player
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Link>
    </div>
  )
}

export default Header