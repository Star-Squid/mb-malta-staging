import ProjectLanguages from "./ProjectLanguages"

import * as React from "react"
export default function ProjectCard(props){
    return(
        <div className="card reveal" role="presentation">
            <a href={props.address}>
              <div className="contain-thumb">
                {/* below div originally has class thumb also */}
                <div className={props.keyword}></div>
              </div>
            </a>
            <h3>{props.title}</h3>
            <ProjectLanguages languages={props.languages}></ProjectLanguages>
            <p>
              {props.description}
            </p>
            <p>
              <a href={props.address}>link</a> &middot;
              <a href={props.code}>code</a>
            </p>
          </div>
    )
}