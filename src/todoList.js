import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './style.css'
import { Input , Button , List } from 'antd'
import store from './store' //引入store

const data = [
    '111',
    '22222',
    '333333'
]

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
//  组件里的数据更新
        store.subscribe(this.storeChange)
        //订阅redux的状态
    }
    render(){
        return (
            <div className="app">
              <div>
                <Input 
                    placeholder={this.state.inputValue} 
                    style={{width:'250px',marginRight:'20px'}} 
                    onChange={this.changeInputValue}
                />
                  <Button type="primary">增加</Button>
              </div>
              <p>{this.state.inputValue}</p>
              <div style={{marginTop:'30px'}}>
                  <List 
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {item=>(<List.Item>{item}</List.Item>)}
                  />
              </div>
            </div>
        )
    }
    changeInputValue = (e)=>{
        console.log(e.target.value)
        // 修改redux里面state的值 需要创建Action
        // Action是一个对象 一般有两个属性 1 对Action的描述 2 是要改变的值
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        // 创建好action后 需要通过dispatch方法传递给store
        store.dispatch(action)
    }
    storeChange = ()=>{
        this.setState(store.getState())
    }
}

export default TodoList