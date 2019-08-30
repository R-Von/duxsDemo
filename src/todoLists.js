import React , { Component } from 'react'
import 'antd/dist/antd.css'; // 加载 CSS
import './style.css'
import { Button , Input , List} from 'antd'
import store from './store'

class TodoLists extends Component{
    constructor(props){
        super(props)
        // console.log(store)
        // console.log(store.getState())
        this.state = store.getState()
        // console.log()
        // 绑定 订阅Redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = ()=>{
        this.setState(store.getState())
    }
    render(){
        return (
            <div className="app">
                <div>
                    <Input placeholder="write something"  style={{'width':'250px'}} onChange={this.inputValueChange} />
                    <Button type="primary" onClick={this.addItem}>Add</Button>
                </div>
                <div>
                    <List
                        bordered
                        dataSource={ this.state.list }
                        renderItem={ item => (<List.Item>{item}</List.Item>) }
                    />
                </div>
            </div>
        )
    }

    inputValueChange = (e)=>{
        console.log(e.target.value)
        let action = {
            type:"inputValueChange",
            value:e.target.value
        }
        store.dispatch(action)
    }

    addItem = ()=>{
        let list = [...this.state.list,this.state.inputValue]
        // console.log(list)
        let action = {
            type:"addListItem",
            value:list
        }
        store.dispatch(action)
    }

  
}


export default TodoLists