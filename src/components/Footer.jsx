import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='container mt-5 w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{ width: "400px" }}>
          <h5><i className="fa-solid fa-music me-2"></i>
            Media Player</h5>
          <p>Designed and built with all the love in the world by the Boot team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing page</Link>
          <Link to={'/Home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to={'/History'} style={{ textDecoration: 'none', color: 'white' }}>History Page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</a>
          <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
          <a href="https://reactrouter.com/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React router</a>

        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your email here ...' className='me-2 form-control'/>
            <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href="https://x.com/?lang=en" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://api.linkedin.com/login" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/explore" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.microsoft.com/en-in/windows/sync-across-your-devices?r=1" style={{textDecoration: 'none', color: 'white'}} target='_balnk'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center text-white mt-2'>Copyright &#169;2024 . Built with Docusaurus.</p>

    </div>
  )
}

export default Footer