import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button , List , Input , Icon } from 'antd'


class TodoListUI extends Component {
    render(){
        return(
            <div className="app">
                <div>
                    <Input 
                        placeholder = "write something" 
                        style = {{'width':'200px'}} 
                        value = {this.props.inputValue}
                        onChange = {this.props.changeInputValue}
                    />
                    <Button type="primary" onClick={this.props.clickBtn}>Add</Button>    
                </div>
                {/* <p>{this.state.inputValue}</p> */}
                <div>
                    <List 
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=>{
                            return(
                                <List.Item
                                    key={index}
                                    actions={[
                                        <Icon type="delete" onClick={(e)=>{
                                            e.preventDefault()
                                            this.props.deleteItem(index)
                                        }}/>
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
}

export default TodoListUI

// UI组件与业务逻辑分离