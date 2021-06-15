import React, { Component } from 'react'
import { Button, Select } from 'antd'
import { INCREMENT, DECREMENT, INCREMENTASYNC } from '../../redux/constant'
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// UI组件
class Count extends Component {

    state = {
        value: 1
    }
    handleChange = (value) => {
        this.setState({ value })
    }

    increment = () => {
        const { value } = this.state;
        this.props[INCREMENT](value)
    }

    decrement = () => {
        const { value } = this.state;
        this.props[DECREMENT](value)
    }

    incrementIfOdd = () => {
        const { value } = this.state;

    }

    incrementAsync = () => {
        const { value } = this.state;
        this.props[INCREMENTASYNC](value, 500)
    }

    render () {
        let { count,person } = this.props
        return (
            <div>
                <h1>当前求和：{count}   下面list长度 {person.length}</h1>
                <Select onChange={this.handleChange} defaultValue="1" >
                    <Select.Option value={1}>1</Select.Option>
                    <Select.Option value={2}>2</Select.Option>
                    <Select.Option value={3}>3</Select.Option>
                </Select>

                <Button onClick={this.increment} >+</Button>
                <Button onClick={this.decrement} >-</Button>
                <Button onClick={this.incrementIfOdd} >当前求和为奇数再加</Button>
                <Button onClick={this.incrementAsync} >异步加</Button>

            </div >
        )
    }
}

// redux 容器组件
export default connect(
    (state) => ({ 
        count: state.count,
        person:state.person 
    }),
    {
        [INCREMENT]: createIncrementAction,
        [DECREMENT]: createDecrementAction,
        [INCREMENTASYNC]: createIncrementAsyncAction
    }
)(Count)