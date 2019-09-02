// 无状态组件
// 无状态组件其实就是一个函数 它不再继承任何类 也不存在任何的状态(state)
// 因为它的无状态 所以 它的性能要比普通的React组件要好

// 编写无状态组件
// 1. 不再需要引入React中的{Component} 
// 2. TodoListUI函数 里边只返回JSX的部分
// 3. 函数只传递一个props

import React from 'react'
import 'antd/dist/antd.css'
import { Input , Button , List , Icon} from 'antd'


const TodoListUI = (props)=>{
    console.log(props)
    return (
        <div className="app">
            <div>
                <Input 
                    placeholder = "write something" 
                    style = {{width:'250px'}}
                    onChange = {props.changeInputValue} 
                    value={props.inputValue}
                />
                <Button 
                    type="primary" 
                    onClick={props.clickBtn}
                >
                    Add
                </Button>
            </div>
            
            <div style={{width:'300px',marginTop:'20px'}}>
                <List 
                    bordered
                    dataSource = {props.list}
                    renderItem = {(item,index)=>{
                        return(
                            <List.Item
                                key={index}
                                actions={[
                                    <Icon  
                                        type = "delete" 
                                        onClick = {(e)=>{
                                            e.preventDefault()
                                            props.deleteItem(index)
                                        }}
                                    />
                                ]} 
                            >
                            {item}
                            </List.Item>
                        )
                    }}
                />
            </div>
        </div>
    )
}
export default TodoListUI