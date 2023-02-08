import * as React from "react";
import * as thumbs from "../barbara-assets/thumbs/thumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import * as blogThumbs from "../barbara-assets/thumbs/blog";
import * as clockThumbs from "../barbara-assets/thumbs/clock";
import * as flashcardsThumbs from "../barbara-assets/thumbs/flashcards";

const largeProjects = [
  {
    address: "https://magnificent-griffin-60d663.netlify.app/",
    code: "https://github.com/Star-Squid/squidblog",
    key: "blog",
    title: "Star Squid Blog",
    languages: ["react", "scss", "graphQL", "contentful api"],
    description:
      "Going back to basics with a personal blog and into the future with modern web solutions.",
    thumbnail: blogThumbs.blog1,
    //! can we just iterate over exports?
    images: [
      blogThumbs.blog1,
      blogThumbs.blog2,
      blogThumbs.blog3,
      blogThumbs.blog4,
      blogThumbs.blog5,
    ],
  },
  {
    address: "https://star-squid.github.io/Flipping-Flashcards",
    code: "https://github.com/Star-Squid/Flipping-Flashcards",
    key: "flashcards",
    title: "Flipping Flashcards",
    languages: ["javascript", "css", "html"],
    description:
      "The study aid the world may not need. It serves flashcards from different fields of study and remembers how well you remember.",
    thumbnail: flashcardsThumbs.flashcards1,
    images: [
      flashcardsThumbs.flashcards1,
      flashcardsThumbs.flashcards2,
      flashcardsThumbs.flashcards3,
      flashcardsThumbs.flashcards4,
      flashcardsThumbs.flashcards5,
      flashcardsThumbs.flashcards6,
      flashcardsThumbs.flashcards7,
    ],
  },
  {
    address: "hhttps://star-squid.github.io/Workday-Clock/",
    code: "https://github.com/Star-Squid/Workday-Clock",
    key: "clock",
    title: "Workday Clock",
    languages: ["javascript", "css", "html"],
    description:
      "All the benefits of an analog clock without the problem of roundness.",
    thumbnail: clockThumbs.clock1,
    images: [
      clockThumbs.clock1,
      clockThumbs.clock2,
      clockThumbs.clock3,
      clockThumbs.clock4,
      clockThumbs.clock5,
    ],
  },
];

const smallProjects = [
  {
    address: "",
    code: "https://github.com/Star-Squid/employee-directory",
    key: "employee",
    title: "Employee Directory",
    languages: ["javascript", "html", "css"],
    description:
      "Built in record time, this React project was made to a friend's specifications in order to address a problem in his workplace. The program converts CSV employee data into formatted cards and offers a variety of filters for the results.",
    thumbnail: thumbs.employee,
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
  let lastLanguage = props.languageArr[props.languageArr.length - 1];
  let languageList = "";

  for (let i = 0; i < props.languageArr.length - 1; i++) {
    languageList = languageList + props.languageArr[i] + " · ";
  }

  return (
    <p className="languages">
      {languageList}
      {lastLanguage}
    </p>
  );
}

const smallProjectList = smallProjects.map((project) => {
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

const largeProjectList = largeProjects.map((project) => {
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
        <a href={"/" + project.key + "-project.html"} className="readmore">
          READ MORE <FontAwesomeIcon icon={solid("angles-right")} />
        </a>
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
