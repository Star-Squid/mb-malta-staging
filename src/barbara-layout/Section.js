import * as React from "react"
// import "../styles/barbara-main.scss"

export default function Section(props){
    return(
        <section id={props.id} className="section">
            
            {props.children}</section>
    )
}