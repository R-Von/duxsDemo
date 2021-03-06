import React, { Component } from 'react'
// import 'antd/dist/antd.css'
// import './style.css'
// import { Input , Button , List , Icon } from 'antd'
// import TodoListUI from './TodoListUI'  UI 组件
import Todo from './todoUI'

import store from './store' //引入store
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionType'
import { changeInputAction , deleteItemAction , addItemAction , getGithubList } from './store/actionCreator'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
//  组件里的数据更新
        store.subscribe(this.storeChange)
        //订阅redux的状态
    }
    storeChange = ()=>{
        this.setState(store.getState())
    }
   
    render(){
        return (
            // 无状态组件
            <Todo   
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                changeInputValue = {this.changeInputValue}
                deleteItem = {this.deleteItem}
                clickBtn = {this.clickBtn}
            />
            // UI组件  UI与业务逻辑分离
            // <TodoListUI 
            //     inputValue = {this.state.inputValue}
            //     changeInputValue = {this.changeInputValue}
            //     clickBtn = {this.clickBtn}
            //     deleteItem = {this.deleteItem}
            //     list = {this.state.list}
            // />
            // <div className="app">
            //   <div>
            //     <Input 
            //         placeholder={this.state.inputValue} 
            //         style={{width:'200px',marginRight:'20px'}} 
            //         value={this.state.inputValue}
            //         onChange={this.changeInputValue}
            //     />
            //       <Button type="primary" onClick={this.clickBtn}>增加</Button>
            //   </div>
            //   {/* <p>{this.state.inputValue}</p> */}
            //   <div style={{marginTop:'30px',width:'280px'}}>
            //       <List 
            //         bordered
            //         dataSource = {this.state.list}
            //         renderItem = {(item,index)=>(
            //             <List.Item
            //                 key={index}
            //                 actions={[
            //                     // <a onClick={this.deleteItem(index)}>delete</a>
            //                     <Icon 
            //                         type="delete" 
            //                         onClick={e=>{
            //                             e.preventDefault();
            //                             this.deleteItem(index)
            //                         }}
            //                     />
            //                 ]}
            //             >
            //             {item}
            //             </List.Item>
            //         )}
            //       />
            //   </div>
            // </div>
        )
    }
    changeInputValue = (e)=>{
        console.log(e.target.value)
        // 修改redux里面state的值 需要创建Action
        // Action是一个对象 一般有两个属性 1 对Action的描述 2 是要改变的值
        // const action = {
        //     // type:'inputValueChange',
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        // 创建好action后 需要通过dispatch方法传递给store
        store.dispatch(action)
    }
    clickBtn = ()=>{
        // const action = {type:'addListItem'}
        // const action = {type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
        // action传递给store  业务逻辑在Reducer中编写
    }
    deleteItem = (index)=>{
        // cost 
        // console.log(index)
        // console.log('deleteItem')
        // const action = {
        //     // type:'deleteListItem',
        //     type:DELETE_ITEM,
        //     value:index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        const action = getGithubList()
        console.log(action)
    }
}

export default TodoList