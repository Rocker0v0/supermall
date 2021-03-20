import {request} from "./request"

export function getCateGoryDate(){
   return  request({
        url:"/category"
    })
}
export function getCateGoryDateDetail(maitKey){
    return request({
        url:"/subcategory",
        params:{
            maitKey,
        }
    })
}
export function getCateGoryDateCommont(miniWallkey, type){
    return request({
        url:"/subcategory/detail",
        params:{
            miniWallkey,
            type
        }
    })
}