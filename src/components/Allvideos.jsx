import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { toast } from 'react-toastify'

function Allvideos({addVideoStatus,setremoveVideoFromCategory}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState({})
  /* side effect */
  const getAllVideo = async()=>{
    const result = await getVideosApi()
    // console.log(result);
    setAllVideos(result.data)
  }
  console.log(allVideos);
  
  /* to handle sideeffect */
  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus]) /* []-use effect is called when component render to browser */
  
  const onDrag=(e)=>{
    e.preventDefault()
  }
  const videoDrop=async(e)=>{
    const {category,video} =JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(category);
    console.log(video);
    
    const newArray=category.AllVideos.filter((item)=>item.id!=video.id)
    const newCategory={
      category:category.category,
      AllVideos:newArray,
      id:category.id
    }
    
    // const index=category.AllVideos.findIndex((item)=>item.id==video.id);
    // console.log(index);
    // category.AllVideos.splice(index,1)
    const result = await addVideoToCategoryApi(category.id,newCategory)
    console.log(result);
    if (result.status>=200 && result.status<300) {
      // toast.success("video removed from category")
      setremoveVideoFromCategory(result.data)
    }/* else{
      toast.error("somethong went wrong")
    } */
    

  }
  return (
    <>
    <div droppable onDragOver={(e)=>{onDrag(e)}} onDrop={(e)=>videoDrop(e)}>
      <h4>All Videos</h4>
    {/* video added */}
      {allVideos.length>0?
        <div className="container">
        <div className="row">
          { allVideos.map((item)=>(
            <div className="col-md-3 p-2">
            <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </div>
          ))
          }
          
        </div>
      </div>
      
        :

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp" className='w-100' alt="no image" />
            <h5 className='text-warning text-center'>No video Added Yet</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>}
    </div>
    </>
  )
}

export default Allvideos