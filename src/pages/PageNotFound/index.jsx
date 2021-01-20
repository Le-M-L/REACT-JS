import React from 'react'

// const PageNotFound = () => {
//     return (
//         <div>
//             404
//         </div>
//     )
// }

class PageNotFound extends React.Component{
    constructor(props){
        super(props);
    console.log(this)

    };
    render(){
        return(
            <div>
                404
            </div>
        )
    }
}

export default PageNotFound