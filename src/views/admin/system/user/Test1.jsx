import { useState, useEffect, useLayoutEffect,memo } from "react"
import { Button } from "antd"
// import useName from "./useName"
const Test1 = memo(({count = ''}) => {
    useEffect(() => {
        console.log('123');
        return () => {
            console.log('clear');
        }
    },[]) 



    useLayoutEffect(() => {
        console.log('同步的effcet');
    })
    
    const handleClick = () => {

    }

    return (
        <div>
            <Button onClick={handleClick} >按钮</Button>
            test1----
            {count}
            ----
        </div>
    )
})


export default Test1