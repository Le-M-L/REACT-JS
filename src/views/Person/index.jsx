import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPerson } from '../../redux/actions/person'
import { Input, Button, List } from 'antd'
class Person extends Component {
    state = {
        name: 1,
        age: 1
    }
    handChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handClick = () => {
        this.props.add({
            id:this.props.person.length,
            name:this.state.name,
            age:this.state.age
        })
    }
    render () {
        return (
            <div>
                <Input defaultValue={this.state.name} onChange={this.handChangeName} ></Input>
                <Input defaultValue={this.state.age} onChange={this.handChangeAge} ></Input>
                <Button onClick={this.handClick}>点击</Button>
                <br />
                {
                    this.props.person.map(item => {
                        return <List key={item.id}>
                            <List.Item>
                                {item.name}
                            </List.Item>
                        </List>
                    })
                }
            </div>
        )
    }
}

export default connect(state => {
    return {person:state.person}
}, {
    add: createAddPerson
})(Person)