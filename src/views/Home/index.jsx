import React, { PureComponent } from 'react'
import { Button } from 'antd'
import B from './B'
import C from "./C"
import MyContext from "./context"


export default class Home extends PureComponent {

    state = {
        name: '12'
    }

    ok = () => {
        this.setState({ name: '456' })
        // this.props.history.push('/about')
    }

    render () {
        console.log(this)

        return (
            <div>
                Home
                <Button onClick={this.ok}> 点击修改 </Button>
                <MyContext.Provider value={this.state} >
                    <B />
                </MyContext.Provider>
                <MyContext.Consumer>
                    {
                        value => {
                            return <C  {...this.state}/>
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
