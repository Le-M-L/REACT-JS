import React, { Component } from 'react'
import  "./index.model.less"
import { Button } from "antd"
export default class Home extends Component {
    render() {
        return (
            <div className="appBox">
                    home
                    <Button type="primary">按钮</Button>
            </div>
        )
    }
}
