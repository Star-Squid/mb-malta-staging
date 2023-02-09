import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {Link} from "gatsby";
import * as projectList from "./ProjectList";
import Languages from "./Languages";

const smallProjectList = projectList.smallProjects.map((project) => {
  return (
    <div className="card reveal" role="presentation">
      <a href={project.address ? project.address : project.code}>
        <div className="contain-thumb" role="presentation">
          <div className="thumb art">
            <img alt="" src={project.thumbnail} />
          </div>
        </div>
      </a>
      <h3>{project.title}</h3>
      <Languages languageArr={project.languages} />
      <p>{project.description}</p>
      <p>
        {project.address && <a href={project.address}>link</a>}
        {project.address && " · "}
        <a href={project.code}>code</a>
      </p>
    </div>
  );
});

const largeProjectList = projectList.largeProjects.map((project) => {
  return (
    <div className="card reveal" role="presentation">
      <a href={project.address}>
        <div className="contain-thumb" role="presentation">
          {/* //! originnally classnname thumb art, may be key to stylinng */}
          <div className="thumb">
            <img alt="" src={project.thumbnail} />
          </div>
        </div>
      </a>
      <h3>{project.title}</h3>
      <Languages languageArr={project.languages} />
      <p>{project.description}</p>
      <p>
        <Link to={project.slug} className="readmore">
          READ MORE <FontAwesomeIcon icon={solid("angles-right")} />
        </Link>
      </p>
    </div>
  );
});

export function SmallCardGrid() {
  return (
    <div className="cards" role="presentation">
      {smallProjectList}
    </div>
  );
}

export function LargeCardGrid() {
  return (
    <div className="cards" role="presentation">
      {largeProjectList}
    </div>
  );
}
