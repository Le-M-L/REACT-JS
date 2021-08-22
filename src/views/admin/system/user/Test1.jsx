import { useState, useEffect } from "react"
import { Button } from "antd"
import useName from "./useName"
const Test1 = () => {
    const {name, age, setName} = useName()
    useEffect(() => {
        console.log('123');
        return () => {
            console.log('clear');
        }
    })

    const handleClick = () => {
        setName('dd')
    }

    return (
        <div>
            <Button onClick={handleClick} >按钮</Button>
            test1----
            {name}
            ----
            {age}
        </div>
    )
}

export default Test1