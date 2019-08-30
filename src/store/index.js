import { createStore,applyMiddleware } from 'redux'

// import thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(
    reducer
)

export default store


// store必须是唯一的 多个store不允许 只能有一个store空间
// 只有store能改变自己的内容 Reducer不能改变
// Reducer必须是纯函数



// // redux-thunk
// import { createStore  } from 'redux'
// //在这里额外引入中间件 middleware  然后 再引入redux-thunk库

// import reducer from './reducer'
// // import thunk from 'redux-thunk'

// const store = createStore(
//     reducer
//     // applyMiddleware(thunk)
// ) //创建数据存储仓库


// export default store