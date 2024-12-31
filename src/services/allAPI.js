//create function to save video

import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

export const saveVideoAPI = async (videoDetails)=>{

    return await commonAPI(`POST`, `${serverURL}/uploadVideos`, videoDetails)
}

// get data form databse ie db.json to provide in view
export const getAllVideoAPI = async ()=>{
    return await commonAPI('GET', `${serverURL}/uploadVideos`, "")
}
//save data to history
export const saveHistoryAPI = async (historyDetails)=>{

    return await commonAPI(`POST`, `${serverURL}/history`, historyDetails)
}

//get data from history of database
export const getAllHistoryAPI = async ()=>{
    return await commonAPI('GET', `${serverURL}/history`, "")
}

//deleteHistoryAPI - when clicked on delete button delete method
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//remove videos from home page-delete method to https://loacalhost:3000/uploadVideos/id called by videocard when clicked on delete button
export const removeVideoAPI = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/uploadVideos/${id}`,{})
}

//save category api- post request called by category compoent when user click on add button of modal
//categoryDetails = {categoryName, allVideos}
export const saveCategoryAPI = async (categoryDetails)=>{

    return await commonAPI(`POST`, `${serverURL}/categories`,categoryDetails )
}

//get data from category of database, when component loaded in browser
export const getAllCategoryAPI = async ()=>{
    return await commonAPI('GET', `${serverURL}/categories`, {})
}

//remove category from home page-delete method to https://loacalhost:3000/cateogoies/id called by videocard when clicked on delete button
export const deleteCategoryAPI = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//update category API when video dropped on category component
export const UpdateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI('PUT',`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}

