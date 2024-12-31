import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-player-img.jpg'
import featureImg1 from '../assets/feature-img1.jpg'
import featureImg2 from '../assets/feature-img2.jpg'
import featureImg3 from '../assets/feature-img3.jpg'
import { Button, Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{ paddingTop: "100px" }} className='container'>
      <div className='row align-items-center'>
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: "justify" }}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/Home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6 p-2">
          <img src={landingImg} className='img-fluid' alt="no image" />
        </div>
      </div>

      {/* features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className='img-fluid' src={featureImg1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className='img-fluid' src={featureImg2} />
              <Card.Body>
                <Card.Title>Categorise Videos !!</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className='img-fluid' src={featureImg3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className='my-5 row align-items-center p-5 border rounded'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p><span className='fs-5 fw-bolder' style={{ textAlign: 'justify' }}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magni deserunt culpa sunt maiores natus ea voluptatem repudiandae temporibus! Iste, provident nam soluta temporibus deserunt eius saepe quas laborum! Hic.</p>
          <p><span className='fs-5 fw-bolder' style={{ textAlign: 'justify' }}>Categorise Video:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magni deserunt culpa sunt maiores natus ea voluptatem repudiandae temporibus! Iste, provident nam soluta temporibus deserunt eius saepe quas laborum! Hic.</p>
          <p><span className='fs-5 fw-bolder' style={{ textAlign: 'justify' }}>Managing History:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magni deserunt culpa sunt maiores natus ea voluptatem repudiandae temporibus! Iste, provident nam soluta temporibus deserunt eius saepe quas laborum! Hic.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/eGewf8h7Ph0" title="Kaaliban | Short Film | 4K | Neha Nazneen | Forwin Francis | Vysakh Anirudhan" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing