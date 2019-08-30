import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store


// store必须是唯一的 多个store不允许 只能有一个store空间
// 只有store能改变自己的内容 Reducer不能改变
// Reducer必须是纯函数