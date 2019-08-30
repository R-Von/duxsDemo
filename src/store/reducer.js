import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './actionType'

const defaultState = {
    inputValue:'',
    list:['111','222','333']
}

export default (state=defaultState,action)=>{
    // console.log('state',state)
    // console.log('action',action)
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type===CHANGE_INPUT){
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        // newState.list = action.value
        newState.list = [...newState.list,newState.inputValue]
        newState.inputValue = ''
        return newState
    }
    if(action.type===DELETE_ITEM){
        let index = action.value
        newState.list.splice(index,1)
        return newState
    }

    return newState
}