import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, UpdateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({ setDeleteResponseFromCategory, deleteResponseFromView }) => {

  const [allCategories, setAllCategories] = useState([])

  const [categoryName, setCategoryName] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories()
  }, [deleteResponseFromView])

  console.log(allCategories);


  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails)
        alert('Category Created')
        getAllCategories()
        handleClose()

      } catch (err) {
        console.log(err);

      }
    } else {
      alert('please provide category name')
    }
  }


  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getAllCategories()
    } catch (err) {
      console.log(err);

    }
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log("inside videoCardDropOverCategory");
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    //update cateogory by add video to its allvideos
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);

    //  api call to update the category
    await UpdateCategoryAPI(categoryDetails)
    getAllCategories()
    const result = await removeVideoAPI(videoDetails?.id)
    setDeleteResponseFromCategory(result)

  }

  const categoryVideoDragStarted = (e, dragVideoDetails, categoryDetails) => {
    console.log("Inside categoryVideoDragStarted");
    let dragData = { video: dragVideoDetails, categoryDetails }
    e.dataTransfer.setData("dargData", JSON.stringify(dragData))
  }



  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>

      </div>

      {/* displaying all categories */}
      <div className='container-fluid mb-3 mt-2'>
        {/* single category view */}
        {
          allCategories?.length > 0 ?
            allCategories?.map(categoryDetails => (
              <div key={categoryDetails?.id} className='border rounded p-3 mb-3' droppable="true" onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, categoryDetails)}>
                <div className='d-flex justify-content-between'>
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button className='btn' onClick={() => removeCategory(categoryDetails?.id)}><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                {/* Display category videos */}

                <div className='row mt-2'>
                  {
                    categoryDetails?.allVideos?.length > 0 &&
                      categoryDetails?.allVideos?.map(video => (
                         <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e => categoryVideoDragStarted(e, video, categoryDetails)}>
                            {/* video cards */}
                            <VideoCard displayData={video} insideCategory={true} />
                         </div>
                    ))
                  }

                </div>


              </div>
            )) :

            <div className='text-danger fw-bolder'>No categories are added yet !!!</div>
        }
      </div>

      {/* modal */}
      <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingCategoryName"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category