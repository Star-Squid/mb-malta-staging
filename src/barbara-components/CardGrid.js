import * as React from "react";
import * as thumbs from "../barbara-assets/thumbs/thumbs";

// {
//     address: "",
//     code: "",
//     key: "",
//     title: "",
//     languages: "",
//     description: "",
//     thumbnail: "",

//   },

const bigProjects = [{
      address: "",
    code: "",
    key: "",
    title: "",
    languages: "",
    description: "",
    thumbnail: "",
},]

const smallProjects = [
  {
    address: "",
    code: "https://github.com/Star-Squid/employee-directory",
    key: "employee",
    title: "Employee Directory",
    languages: ["javascript", "html", "css"],
    description:
      "Built in record time, this React project was made to a friend's specifications in order to address a problem in his workplace. The program converts CSV employee data into formatted cards and offers a variety of filters for the results.",
    thumbnail: "../barbara-assets/thumbs/employee.webp",
  },
  {
    address: "https://star-squid.art",
    code: "https://github.com/Star-Squid/art-portfolio",
    key: "art",
    title: "Star Squid Studio",
    languages: ["javascript", "html", "css"],
    description:
      "Art portfolio with modal image galleries and collapsible sections.",
    thumbnail: thumbs.art,
  },
  {
    address: "https://mb-malta.co.uk/DiceStats/",
    code: "https://github.com/Landsil/landsil.github.io/tree/master/DiceStats",
    key: "dice",
    title: "Dice Stats",
    languages: ["javascript", "html", "css", "mocha testing"],
    description:
      "Started as a UI for someone else's dice probability-checker, but turned into full-blown code refactoring, modularisation and testing. Work in progress.",
    thumbnail: thumbs.dice,
  },
  {
    address: "https://star-squid.github.io/memory",
    code: "https://github.com/Star-Squid/memory",
    key: "memory",
    title: "Wildflower Memory",
    languages: ["javascript", "html", "css"],
    description:
      "Classic memory game with illustrations of British meadow flowers.",
    thumbnail: thumbs.memory,
  },
  {
    address: "https://star-squid.github.io/hookd",
    code: "https://github.com/Star-Squid/hookd",
    key: "hookd",
    title: "Hookd",
    languages: ["javascript", "html", "css"],
    description:
      "While playing with Bootstrap, I may have invented the next hit app.",
    thumbnail: thumbs.hookd,
  },
  {
    address: "https://star-squid.github.io/high-five",
    code: "https://github.com/Star-Squid/high-five",
    key: "high_five",
    title: "High Five",
    languages: ["javascript", "html", "css"],
    description: "A game of treats and tricks with my cat.",
    thumbnail: thumbs.high_five,
  },
];

function Languages(props) {
  let lastLanguage = props.languageArr.pop();
  return (
    <p className="languages">
      {props.languageArr.map((language) => {
        return language + " · ";
      })}
      {lastLanguage}
    </p>
  );
}

const smallProjectList = smallProjects.map((project) => {
  return (
    <div className="card reveal" role="presentation">
      <a href={project.address}>
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
        <a href={project.address}>link </a>&middot;
        <a href={project.code}> code</a>
      </p>
    </div>
  );
});

export default function CardGrid() {
  return (
    <div className="cards" role="presentation">
      {smallProjectList}
    </div>
  );
}
