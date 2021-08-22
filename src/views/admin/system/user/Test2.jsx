import useName from "./useName"

const Test2 = () => {
    const {name, age} = useName()
    console.log('test2');
    return (
        <div>
            test2 ---- 
            {name}
            -----
            {age}
            `

        </div>
    )
}

export default Test2