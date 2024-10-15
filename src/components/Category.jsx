import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({removeVideoFromCategory}) {
  const [show, setShow] = useState(false);
  const [category,setCategory] = useState("")
  const [allCategory,setAllCategory]=useState([])
  // states to check status and rerender
  const [addCategoryStatus,setAddCategoryStatus]=useState({})
  const [deleCategory,setDeleCategory]=useState({})
  const [addVideotoCategory,setAddVideotoCategory]=useState({})
  const handleClose = () => {
    setShow(false)
    handleCancel()
  };
  const handleShow = () => setShow(true);
  
  const handleCancel=()=>{
    setCategory("")
  }

  const handleAdd=async()=>{
    if(category){
      const reqBody={
        category,
        AllVideos:[]
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success("Category added successfully")
        setAddCategoryStatus(result.data)
        handleClose()
      }else{
        toast.error("something went wrong")
        handleClose()
      }
    }else{
      toast.info("Please add a category name")
    }   
  }

  const getCategory=async()=>{
    const result = await getAllCategoryApi()
    if (result.status>=200 && result.status<300) {
      setAllCategory(result.data)
    }
  }

  useEffect(()=>{
    getCategory()
  },[addCategoryStatus,deleCategory,addVideotoCategory,removeVideoFromCategory])
  
  const handleDelete=async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status>=200 && result.status<300) {
      setDeleCategory(result.data)
    }
  }
  const onDrag=(e)=>{
    e.preventDefault() /* prevent data lose */
  }
  const videoDrop=async(e,categoryDetails)=>{
    console.log(categoryDetails);
    const videoDetails= JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    if (categoryDetails.AllVideos.find((item)=>item.id==videoDetails.id)) {
      toast.error('video already present in the category')
    }else{
      categoryDetails.AllVideos.push(videoDetails)
      const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails)
      if (result.status>=200 && result.status<300) {
        setAddVideotoCategory(result.data)
        toast.success("video added")
      }else{
        toast.error("something went wrong")
      }
    }
    
  }
  const videoDrag=(e,video,category)=>{
    const dataShare ={
      category,
      video
    }
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    console.log(dataShare);
    
  }

  return (
    <>
     <div >
      <h4>Category</h4>
      <button className='mt-4 w-100 btn btn-warning' onClick={handleShow}>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded'>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Category Name' className='form-control' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancle
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      { allCategory?.length>0 &&

        allCategory.map((item)=>
        (<div className='p-3 mt-5 border border-secondary border-2 rounded' droppable onDragOver={(e)=>{onDrag(e)}} onDrop={(e)=>{videoDrop(e,item)}}>
          <div className='d-flex justify-content-between mb-3'>
            <h5>{item?.category}</h5>
            <button onClick={()=>{handleDelete(item?.id)}} className='btn btn-danger'>
            <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          
            {
            item?.AllVideos?.length>0 &&
            item?.AllVideos?.map((video)=>(
              <div draggable onDragStart={(e)=>{videoDrag(e,video,item)}}>
              <Videocard video={video} isPresent={true}/>
              </div>
            ))
            }
          
        </div>)
        )
        
      }
     </div>
     

    </>
  )
}

export default Category