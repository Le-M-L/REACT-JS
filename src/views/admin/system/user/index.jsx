import { useState, useMemo } from "react"
import { Button } from "antd"
import Test1 from "./Test1"
import Test2 from "./Test2"

const User = () => {
    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const All = useMemo(() => count + 1, [count])

    return (
 
        <span style={{ color: 'red' }}  >
            <span>{All}</span>
            <div></div>
            {count}
            <div></div>
            <Button onClick={handleClick} >增加</Button>
            <Test2/>
            <Test1/> 
        </span>
    ) 
}

export default User