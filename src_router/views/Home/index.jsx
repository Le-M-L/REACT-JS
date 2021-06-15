import React, { Component } from 'react'
import {Button} from 'antd'
export default class Home extends Component {

    ok = () =>{
       this.props.history.push('/about')
    }

    render() {
        console.log(this)

        return (
            <div>
                Home
                <Button onClick={this.ok}> 点击 </Button>
            </div>
        )
    }
}
