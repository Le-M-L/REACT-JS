import React, { Component } from 'react'
import { Button } from 'antd';

export default class HomeNews extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Button>按钮</Button>
            </div>
        )
    }
}
