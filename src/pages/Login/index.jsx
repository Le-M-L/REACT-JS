import React,{ useState, useEffect} from 'react'

const Login = () => {

    let [ count ] = useState(0) 

    return (
        <div>
            <span>{count}</span>
        </div>
    )
};

export default Login