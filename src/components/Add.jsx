import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    imageUrl:"",
    embedLink:""
  })
  const [show, setShow] = useState(false);
  console.log(videoDetails);
  
  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleCancel =() =>{
    setVideoDetails({
      caption:"",
      imageUrl:"",
      embedLink:""
    })
  }
  const handleAdd = async()=>{
    const {caption , imageUrl , embedLink}=videoDetails
    if (!caption || !imageUrl || !embedLink) {
      toast.info('please fill the form completely')
    }else{
      if (videoDetails.embedLink.startsWith('https://youtu.be/')) {
        const embedL =`https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
        // setVideoDetails({...videoDetails,embedLink:embedL})
        const result = await addVideoApi({...videoDetails,embedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('video uploaded successfully')
          handleClose()
          setAddVideoStatus(result.data)
        }else{
          toast.warning('something went wrong')
          handleClose
        }
      }else{
        const embedL =`https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`
        // setVideoDetails({...videoDetails,embedLink:embedL})
        const result = await addVideoApi({...videoDetails,embedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('video uploaded successfully')
          handleClose()
          setAddVideoStatus(result.data)
        }else{
          toast.warning('something went wrong')
          handleClose
        }
      }
    }
  }
  /* https://www.youtube.com/watch?v=wdco2tEmc6A */
  /* https://youtu.be/wdco2tEmc6A?si=IOW2nsQWftSYdk2k */
  /* <iframe width="864" height="486" src="https://www.youtube.com/embed/wdco2tEmc6A" title="Why Nobody Can Stop Cole Palmer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
  // const getEmbedLink=(e)=>{
  //   const Link=e.target.value
  //   if (Link.startsWith('https://youtu.be/')) {
  //     const embedL =`https://www.youtube.com/embed/${Link.slice(17,28)}`
  //     setVideoDetails({...videoDetails,embedLink:embedL})
  //   }else{
  //     const embedL =`https://www.youtube.com/embed/${Link.slice(-11)}`
  //     setVideoDetails({...videoDetails,embedLink:embedL})
  //   }
  // }
  
  return (
    <>
      <div  className='d-flex align-items-center'>
        <h5 className='d-none d-md-inline'>Upload New Video</h5>
        <button className='btn pb-3'><FontAwesomeIcon icon={faCloudArrowUp} className="fs-5" onClick={handleShow} /></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill the following details
          <div className='m-2 p-3 border border-dark rounded'>
          <div className='mb-3'>
            <input value={videoDetails.caption} onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder='Vidoe caption' className='form-control'/>
          </div>
          <div className='mb-3'>
            <input value={videoDetails.imageUrl} onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder='Video Image' className='form-control'/>
          </div>
          <div className=''>
            <input value={videoDetails.embedLink} onChange={(e)=>setVideoDetails({...videoDetails,embedLink:e.target.value})} type="text" placeholder='Video Url' className='form-control'/>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant='warning' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </>
  )
}

export default Add