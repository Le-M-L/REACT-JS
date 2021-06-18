import React, { Component } from 'react'
import MyContext from "./context"

export default class B extends Component {

    static contextType = MyContext

    render() {
        console.log(this.context);
        return (
            <div>
                {this.context.name}
            </div>
        )
    }
}
