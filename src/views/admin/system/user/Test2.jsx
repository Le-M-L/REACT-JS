import React, { Component } from 'react'
import { Button } from "antd"
export default class test2 extends Component {
    state = {
        count:0
    }
    shouldComponentUpdate(preProps,preState){
        return true
    }
    handleClick = () => {
        this.setState((state,props) => {
            console.log(state,props);
            return {
                count:state.count + props.all
            }
        })
    }
    render() {
        const {All} = this.props
        return (
            <div>
                <Button onClick={this.handleClick} >test2</Button>
                {this.state.count}
                test
            </div>
        )
    }
}
