import * as thumbs from "../barbara-assets/thumbs/thumbs";
import * as blogThumbs from "../barbara-assets/thumbs/blog";
import * as clockThumbs from "../barbara-assets/thumbs/clock";
import * as flashcardsThumbs from "../barbara-assets/thumbs/flashcards";


export const largeProjects = [
  {
    address: "https://magnificent-griffin-60d663.netlify.app/",
    code: "https://github.com/Star-Squid/squidblog",
    key: "blog",
    slug: "blog-project",
    title: "Star Squid Blog",
    languages: ["react", "scss", "graphQL", "contentful api"],
    description:
      "Going back to basics with a personal blog and into the future with modern web solutions.",
    thumbnail: blogThumbs.blog1,

    //! can we just iterate over all blogThumbs imports?
    // images: blogThumbs.keys(),
    // images: Object.keys(blogThumbs),
    images: [
      blogThumbs.blog1,
      blogThumbs.blog2,
      blogThumbs.blog3,
      blogThumbs.blog4,
      blogThumbs.blog5,
    ],
    paragraphs: [
      "This website doesn't have an interesting origin story, unless googling 'best projects to learn React' counts as a story. The Star Squid Blog was built using Gatsby, and fetches its post content from Contentful. On the face of it, this is not an earth-shaking project idea... except to me, in a way, it was. Working on this site, I felt it was all coming together - everything I've ever learned about web development was for something, and that something was this. Of course HTML is for writing JSX, of course CSS is meant to be used in modules, of course constructing a page with reusable components is the way to go. It turned out to be the most educational and rewarding project I've ever done.",
      "I started by designing a layout I wanted to work towards; I sketchedmy layout on a piece of paper and then built a plain HTML + CSS pair. The colour scheme was inspired by abstract book covers from the 1980s. Next I started up a Gatsby project and created my page components:index (post list), about and contact. I also created a primary style sheet to tie the graphics together before creating the Layoutcomponent that would enclose my page contents. Some of the components have their own corresponding scss modules, where itseemed appropriate. All scss files use global variables from a separate file.",
      "Next, it was time to install the gatsby-source-contentful plugin and connect the blog content. I created a page template that would be used to generate individual post pages. At this point I hit thegreatest snag in this project. Until quite recently, the ContentfulAPI used to serve rich text data in JSON format, and the wealth ofinstructions I thought I had at my fingertips referred to that, nowoutdated, format. Currently rich text posts are in raw format, and the only source of information is official documentation, which Idid not manage to implement. The best I can do for now is JSON.parse the post content before rendering it with documentToReactComponentsfrom @contentful/rich-text-react-renderer. This method results in readable plain text, but no access to formatting or image assets. I will keep trying different things for now before giving up on Contentful.",
      "Next I tackled the SEO by editing the siteMetadata section of gatsby-config and made sure I could fetch this information on each page by creating a custom hook. An SEO component renders this data in the head of each page. The blog post template uses the post title as its page title.",
      "When all of that was finished, I deployed the blog through Netlify for the world to see. Overall, I am really happy with what I accomplished here. Features I would like to add in the future are a dark theme (almost ready), a tagging system, a 'next post' button linking directly to a newer/older post, and perhaps the option to comment on posts. It could be my own bootleg social media!",
    ]
  },
  {
    address: "https://star-squid.github.io/Flipping-Flashcards",
    code: "https://github.com/Star-Squid/Flipping-Flashcards",
    key: "flashcards",
    slug: "flashcards-project",
    title: "Flipping Flashcards",
    languages: ["javascript", "css", "html"],
    description:
      "Another study aid the world does not need. It serves flashcards from different fields of study and remembers how well you remember.",
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
    paragraphs: [
      "The idea for Flipping Flashcards was inspired by an online discussion about studying, where the consensus was that flashcards  were a brilliant tool for learning anything under the sun and the key to passing exams. This being the 21st century, I was not about to make paper flashcards, but a realistic flipping animation was essential to my vision. At no point did I try any existing flashcard apps; it was no more than a millisecond between 'I’d like to try a tool like this' to 'I think I can make a tool like this'.",
      "The main features I envisioned for this project were: a) the card should seem to physically flip, b) the user should be able to upload their own content, c) the user should be able to influence which questions get repeated more often. All of these ideas generated issues that needed solving.",
      "Coding the interface was the most fun part. For the first iteration, I went a bit crazy with a retro neon design before settling on a more toned down colour scheme. I chose jQuery Flip as the mechanism to handle card movement. However, it required additional work to make the design accessible. (I ended up binding the space key to the flip() function. In the first version, buttons for assigning a rating to each card were positioned outside of the actual flashcard. A crucial part of the project was allowing the user to indicate how well they knew the answer to each question and translating that input to how often a particular card gets shown. To that end, each card object is assigned a rating of 6 points when created. These ratings indicate how many times the card gets copied into the temporary array out of which the next random card is drawn. This array gets created every time a new card is needed, so the number of cards gets refreshed whenever a rating changes; the user's click on one of the three rating buttons removes 2, 1, or none of the card's points. This system is easy to customise - changing difficulty is as easy as assigning a different rating when the card objects are first created. (Difficulty level was included as an option in the settings.)",
      "There are three sets of cards hard-coded into the .js file, but customising the content is an essential part of the Flipping Flashcard concept. I needed a human-readable format that could also be easily split into strings for use with the card factory function. Researching different methods of importing external data into JavaScript was a process of trial and error. The original idea was to use either local Excel files or Google Sheets. As interesting as it was to learn to access Google Sheets remotely through Node.js, I wasn't happy with how complex the process of parsing the result was. Fixation on spreadsheets led me to learn how to use the Google Sheets API, followed by Google Sheets Reader, veering to SheetsJS for a stab at local spreadsheets, before I finally settled on importing .csv instead, as the simplest, most elegant solution. Later I also included the option to use a .json file.",
      "The single most important decision in the lide of this project was bringing in a test user. His feedback, combined with Jakob Nielsen's article on design heuristics, led me to implement the following changes from version 1.0 to 2.0: a) add a welcome page with a prominent call to action, b) automatically prompt to choose a study subject on load, c) more muted default colour palette, with the option to choose neon colours from settings, d) integrate the rating stars into the back of the flashcard, e) include a status box with information about the current card set, the user’s progress, and current ratings, f) introduce keyboard shortcuts, g) remove detailed user instructions, opting instead to make the interface self-explanatory by employing game-like design solutions.",
      "This project is not completely finished and may never be. I have yet to find the one best format for importing user questions; .csv is a simple, convenient, readable format, but its lack of text formatting features makes it only suitable for simple questions and one-sentence answers. More options are offered by .json, but in both cases the user has to create a file especially for use with Flipping Flashcards. With accessibility in mind, I made sure the interface includes keyboard shortcuts for rating as well as flipping the card without clicking. Since this project has changed so much during development, version control was essential; I took advantage of the option to work on different branches without feeling like I needed to give up one approach to try another. However, for the next project I will make sure to follow a design plan in order to stay on track and avoid working on multiple features at once. Additionally, I will involve user feedback at a much earlier stage. It was essential in order to flesh out Flipping Flashcards 2.0, but those choices could have been made much sooner. Finally, in an ironic twist, I discovered that studying with flashcards is not my thing after all, and I’ve since gone back to trusted mind-maps and lists.",
    ]
  },
  {
    address: "hhttps://star-squid.github.io/Workday-Clock/",
    code: "https://github.com/Star-Squid/Workday-Clock",
    slug: "clock-project",
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
    paragraphs: [
      "The Workday Clock was inspired by a Technology Connections's video on the benefits of analog clocks. I'd never been a fan of those; couldn't quite get behind the idea that the long hand should indicate the shorter unit of time, not to mention the reversal of direction that comes with the round shape (the hand moves down for the first 30 minutes and up for the second half). However, the video changed my mind to an extent and crystallized an idea: the perfect clock should provide a visual representation of the length of each hour and the whole day, as well as make it easy to visualize time remaining to an appointment. However, there would be only one direction of travel, and any time outside of active work hours would not be shown. Although work happens at all hours of the day, watching the clock in the evening brings nothing but stress. This clock is optimised perfectly to my needs, but should also be legible to someone else without lengthy explanations.",
      "While the ordinary clock represents the day and each hour as a circle, mine uses arch shapes, which conform better to the idea of a progress bar. The larger arch shows hours between 9:00 and 18:00, and the small one provides additional visualization for each hour as it passes. In order to achieve the shape of the clock faces, I used a semi-circle conical gradient, where each colour section corresponds to one hour. As a pleasant coincidence, 180 degrees of the half-circle are easy to divide by the 9 hours represented, so every hour is equal to 20 degrees of the half-circle. Over that, I overlaid a semi-opaque conical gradient which updates every minute to indicate the passage of time, and a final small opaque semicircle creates the underside of the arch. The appointment feature adds yet another gradient layer to the middle of the stack. This solution allows for adding one custom section to the clock. This is fine for my purpose, since the appointment feature is only there to help visualise the time remaining before it starts. The small arch representing one hour has the same basic structure, minus the appointment layer.",
      "A fun extra feature is the additional colour themes for the clock. The colours and backgrounds are encoded as css variables, so switching themes is as simple as swapping different :roots. This is handled in JavaScript through the setTheme() function.",
      "Since a lot of the functionality of the Workday Clock relies on changing graphic elements with JavaScript, the project is quite css-heavy, and makes full use of gradients, variables and positioning. Although I don’t use the Workday Clock every day now, I feel that building it and becoming used to looking at its shapes has given me a better grasp on time and helped plan each working day.",
    ]
  },
];

export const smallProjects = [
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
