import { useState, useMemo, useRef, useCallback } from "react"
import { Button } from "antd"
import Test1 from "./Test1"
import Test2 from "./Test2"

const User = () => {
    const [count,setCount] = useState(0)
    const ref = useRef()

    const handleClick = useCallback(() => setCount(count+1),[count])

    const All = useMemo(() => count + 1, [count])
    const countAll = () => {
        return  count + 2
    }
    const All1 = useCallback(()=>{countAll()},[count])

    return (
 
        <span style={{ color: 'red' }}  >
            <span>{All}</span>
            <div></div>
            {count}
            <div></div>
            <Button onClick={handleClick} >增加</Button>
            <Test2 all={All} />
            <Test1 count={All}/> 
        </span>
    ) 
}

export default User