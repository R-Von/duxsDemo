// 将Redux的Action放到一个文件里进行管理
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './actionType'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>{
    return {
        type:ADD_ITEM
    }
}

export const deleteItemAction = (index)=>{
    return {
        type:DELETE_ITEM,
        value:index
    }
}