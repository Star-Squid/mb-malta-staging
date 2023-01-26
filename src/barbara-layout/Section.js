import * as React from "react"

export default function Section(props){
    return(
        <section id={props.id} className="section">{props.children}</section>
    )
}