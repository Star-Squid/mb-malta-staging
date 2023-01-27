import * as React from "react";
import ProjectCard from "../barbara-components/ProjectCard";
import * as thumbs from "../barbara-assets/thumbs/thumbs";

// {
//     address: "",
//     code: "",
//     keyword: "",
//     title: "",
//     languages: "",
//     description: "",
//     thumbnail: "",

//   },

const projects = [
  {
    address: "",
    code: "https://github.com/Star-Squid/employee-directory",
    keyword: "employee",
    title: "Employee Directory",
    languages: ["javascript", "html", "css"],
    description:
      "Built in record ime, this React project was made to a friend's specifications in order to address a problem in his workplace. The program converts .csv employee data into nicely-formatted cards and offers a variety of filters for the results.",
    thumbnail: "../barbara-assets/thumbs/employee.webp",
  },
  {
    address: "",
    code: "https://github.com/Star-Squid/employee-directory",
    keyword: "employee",
    title: "Employee Directory",
    languages: ["javascript", "html", "css"],
    description:
      "Built in record ime, this React project was made to a friend's specifications in order to address a problem in his workplace. The program converts .csv employee data into nicely-formatted cards and offers a variety of filters for the results.",
    thumbnail: thumbs.employee,
  },
];

function Languages(props){
  return(
      <p className="languages">{props.arr[0]} &middot; html &middot; css</p>
  )
}

const projectList = projects.map(project => {
  return(    <div className="card reveal" role="presentation">
  <a href={project.address}>
    <div className="contain-thumb" role="presentation">
      <div className="thumb art">
        <img alt="" src={project.thumbnail}/>
      </div>
    </div>
  </a>
  <h3>{project.title}</h3>
  <Languages arr={project.languages}/>
  <p>{project.description}</p>
  <p>
    <a href={project.address}>link</a> &middot;
    <a href={project.code}>code</a>
  </p>
</div>)
})

export default function CardGrid() {
  return (
    <div className="cards" role="presentation">

    {projectList}

      <div className="card reveal" role="presentation">
        <a href="https://github.com/Star-Squid/employee-directory">
          <div className="contain-thumb" role="presentation">
            <div className="thumb employee"></div>
          </div>
        </a>
        <h3>Employee Directory</h3>
        <p className="languages">react &middot; css</p>
        <p>
          Built in 2 weeks, this React project was made to a friend's
          specifications in order to address a problem in his workplace. The
          program converts .csv employee data into nicely-formatted cards and
          offers a variety of filters for the results.
        </p>
        <p>
          <a href="https://github.com/Star-Squid/employee-directory">code</a>
        </p>
      </div>

      <div className="card reveal" role="presentation">
        <a href="https://star-squid.art">
          <div className="contain-thumb" role="presentation">
            <div className="thumb art"></div>
          </div>
        </a>
        <h3>Star Squid Studio</h3>
        <p className="languages">javascript &middot; html &middot; css</p>
        <p>Art portfolio with modal image galleries and collapsible Sections</p>
        <p>
          <a href="https://star-squid.art">link</a> &middot;
          <a href="https://github.com/Star-Squid/art-portfolio">code</a>
        </p>
      </div>

      <div className="card reveal" role="presentation">
        <a href="https://mb-malta.co.uk/DiceStats/">
          <div className="contain-thumb" role="presentation">
            <div className="thumb dice"></div>
          </div>
        </a>
        <h3>Dice Stats</h3>
        <p className="languages">
          javascript &middot; html &middot; css &middot; mocha
        </p>
        <p>
          What started as a UI for a dice probability-checker turned into
          full-blown code refactoring, modularisation and testing.
        </p>
        <p>
          <a href="https://mb-malta.co.uk/DiceStats/">link</a> &middot;
          <a href="https://github.com/Landsil/landsil.github.io/tree/master/DiceStats">
            code
          </a>
        </p>
      </div>

      <ProjectCard
        title="Wildflower Memory"
        address="https://star-squid.github.io/memory"
        code="https://github.com/Star-Squid/memory"
        languages={["javascript", "html", "css"]}
        keyword="memory"
        description="Classic memory game with illustrations of British meadow flowers"
      ></ProjectCard>

      <div className="card reveal" role="presentation">
        <a href="https://star-squid.github.io/memory">
          <div className="contain-thumb">
            <div className="thumb memory"></div>
          </div>
        </a>
        <h3>Wildflower Memory</h3>
        <p className="languages">javascript &middot; html &middot; css</p>
        <p>Classic memory game with illustrations of British meadow flowers</p>
        <p>
          <a href="https://star-squid.github.io/memory">link</a> &middot;
          <a href="https://github.com/Star-Squid/memory">code</a>
        </p>
      </div>

      <div className="card reveal" role="presentation">
        <a href="https://star-squid.github.io/flex-cv">
          <div className="contain-thumb" role="presentation">
            <div className="thumb flex-cv" role="presentation"></div>
          </div>
        </a>
        <h3>Flex CV</h3>
        <div className="languages">html &middot; css</div>
        <p>So many inflexible jobs can fit into flex containers</p>
        <p>
          <a href="https://star-squid.github.io/flex-cv">link</a> &middot;
          <a href="https://github.com/Star-Squid/flex-cv">code</a>
        </p>
      </div>

      <div className="card reveal" role="presentation">
        <a href="https://star-squid.github.io/high-five">
          <div className="contain-thumb" role="presentation">
            <div className="thumb high-five"></div>
          </div>
        </a>
        <h3>High Five!</h3>
        <p className="languages">javascript &middot; html &middot; css</p>

        <p>A game of treats and tricks with my cat</p>
        <p>
          <a href="https://star-squid.github.io/high-five">link</a> &middot;
          <a href="https://github.com/Star-Squid/high-five">code</a>
        </p>
      </div>

      <div className="card reveal" role="presentation">
        <a href="https://star-squid.github.io/hookd">
          <div className="contain-thumb" role="presentation">
            <div className="thumb hookd"></div>
          </div>
        </a>
        <h3>Hookd</h3>
        <p className="languages">javascript &middot; html &middot; css</p>

        <p>While playing with Bootstrap, I may have invented the new hit app</p>
        <p>
          <a href="https://star-squid.github.io/hookd">link</a> &middot;
          <a href="https://github.com/Star-Squid/hookd">code</a>
        </p>
      </div>
    </div>
  );
}
