// reducer是个具有管理能力的模块 
// 和Store一起创建出来

const defaultState = {
    inputValue:"write something",
    list:[
        'item 001',
        'item 002'
    ]
    //初始化数据 
}  //默认数据集  

 // store的自动推送
export default (state = defaultState,action)=>{
//    store将接收到的action自动转发给reducer
//    state 指的是原始仓库里的状态
//    action 是指通过action新传递的状态
//    这个东西有点类似于 Vue 的 watch  返回一个oldValue 和一个 newValue
    console.log('state',state)
    console.log('action',action)
    // Reducer 只能接收state 不能改变 state 
    // 所以声明一个变量 然后再次的将newState返回回去
    if(action.type==="change_input_value"){
        // let newState = state
        let newState = JSON.parse(JSON.stringify(state))
        //深度拷贝 state
        newState.inputValue = action.value
        return newState
    }
    return state
}
// state  整个项目中需要管理的数据信息 没有什么信息的情况下 用空对象表示

// reducer 建立好之后 把reducer引入到store 在创建store时 以参数的形式传递给store
