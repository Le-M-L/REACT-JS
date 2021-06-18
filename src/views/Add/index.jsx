import { Button } from 'antd'
import React,{ useState, useEffect, useRef, Context} from 'react'
import B from "./B"


export default function Count() {
    const [count,setCount] = useState(0)
    const [person,setPerson] = useState({
        name:'1',
        age:'2'
    })
    const add = () => {
        setCount((value) =>{
            return value + 1
        })
    }

    const changeName = () => {
        setPerson((value) => {
            return value
        })
    }

    useEffect(() =>{
        console.log("11");
        return () => {
            // willunmount 
            // 卸载 触发
        }
    },[])


    const myRef = useRef()

    const getDom = () => {
        console.log(myRef);
    }


    return (
        <div>
            <h1>{ person.name }</h1>
            <h1>{ person.age }</h1>
            <h1> {count}</h1>
            <Button onClick={add}>ADD</Button>
            <Button onClick={changeName}>修改名称</Button>
            <Button onClick={getDom}>获取元素</Button>
            <div ref={myRef}>666</div>
            <B/>
        </div>
    )
}
