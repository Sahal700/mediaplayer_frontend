import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const addVideoApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
export const getVideosApi=async()=>{
  return await commonApi('GET',`${serverUrl}/videos`)
}
export const addVideoHistoryApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

export const getAllVideoHistoryApi=async()=>{
  return await commonApi('GET',`${serverUrl}/history`)
}

export const deleteVideoApi=async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

// api to delete vidoe from history
export const deleteVideoHistoryApi=async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}

// api to add catogory
export const addCategoryApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/category`,reqBody)
}
// api to get category
export const getAllCategoryApi=async()=>{
  return await commonApi('GET',`${serverUrl}/category`)
}

// delete category api
export const deleteCategoryApi=async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

// api to add video details to a category
export const addVideoToCategoryApi=async(id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
