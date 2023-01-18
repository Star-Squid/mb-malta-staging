import * as React from "react"
export default function(props){

    return(
        <p className="languages">{props.map(prop => prop)}</p>
    )
}