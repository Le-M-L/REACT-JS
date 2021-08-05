import React, { Component } from 'react'
import { Route } from "react-router-dom";

const user = () => {
    return (
        <div>
            user1132
        </div>
    )
}
export default class User extends Component {

    render () {
        return (
            <div>
                123
                    <Route path="/admin/user/user1" exact>
                        <h1>123</h1>
                        </Route>
            </div>
        )
    }
}
