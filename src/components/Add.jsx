import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {

  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false)

  const [videoDetails, setVideoDetails] = useState({
    caption: "", imgURL: "", youtubeLink: ""
  })
  console.log(videoDetails);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromYoutubeLink = (userInputYoutubeLink) => {
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      console.log(userInputYoutubeLink.split("v=")[1].slice(0, 11));
      const videoId = userInputYoutubeLink.split('v=')[1].slice(0, 11)
      setInvalidYoutubeLink(false)
      setVideoDetails({ ...videoDetails, youtubeLink: `https://www.youtube.com/embed/${videoId}`})

    } else {
      setInvalidYoutubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink:""})
    }
  }

  const handleUploadVideo = async () => {
    //object desturcting.....
    const {caption, imgURL, youtubeLink} = videoDetails
    if(caption && imgURL && youtubeLink){

      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("Video uploaded successfully")
          handleClose()
          //pass the result to the view
          setAddResponseFromHome(result)
        }
      }catch(err){
        console.log(err);
      }
      

    }else{
      alert("please fill the form!!!")
    }
  }



  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border rounded mb-2'>
            <FloatingLabel
              controlId="floatingCaption"
              label="Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingURL"
              label="Video image URL"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgURL: e.target.value })} type="text" placeholder="Video Image URL" />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingLink"
              label="YouTube Video Link"
              className="mb-3"
            >
              <Form.Control onChange={e => extractEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink &&
              <div className='text-danger fw-bolder fs-5'>Invalid Youtube link!!!</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>

        </Modal.Footer>
      </Modal>
    </>


  )
}

export default Add