import { useState, useEffect } from "react"
 function useName(){
    const [name, setName] = useState('小明');
    const [age, setAge] =useState(0);
    // useEffect(() => {
    //     setAge(age+1)
    // },[age]) 
    return {name, age, setName}
} 

export default useName