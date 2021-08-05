import React from "react"
import * as Icon from "@ant-design/icons"
console.log(Icon)
const Icons = ({ name }) => {
    return React.createElement(Icon[name], {
        style: { fontSize: '16px',color:'#fff' }
    })
}
export default Icons