// 将Redux的Action放到一个文件里进行管理
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './actionType'
import axios from 'axios'

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


// 在actionCreator中编写业务逻辑 

export const getGithubList = ()=>{
    return (dispatch)=>{
        axios.get('https://api.github.com/search/repositories?q=language:javascript+language:css+language:html+stars:%3E=10000&sort=stars&order=desc&per_page=10')
        .then(res=>{
            const data = res.data
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }  
}