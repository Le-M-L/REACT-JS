import React, { Component } from 'react'

export default class test2 extends Component {
    shouldComponentUpdate(preProps,preState){
        return true
    }
    render() {
        const {All} = this.props
        return (
            <div>
                {All}
                test
            </div>
        )
    }
}
