import React, { Component } from 'react'

export default class MenuItemContent extends Component {
    render() {
        const { item } = this.props;
        return (
            <span>
                {
                    item.title
                }
            </span>
        )
    }
}
