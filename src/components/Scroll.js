import React from 'react'

//having one component iniside another makes it scrollable
const Scroll=(props)=>{
    console.log(props.children)
    return(
        <div style={{overflowY:'scroll','border':'1px solid black',height:'500px'}}>{props.children}</div> 
    )
}


export default Scroll;