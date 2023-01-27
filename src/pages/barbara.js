import * as React from "react"
import "../styles/barbara-main.scss"
// import ProjectCard from "../barbara-components/ProjectCard"
import Navbar from "../barbara-components/Navbar"
import Sidebar from "../barbara-components/Sidebar"
import Section from "../barbara-layout/Section"
import Modal from "../barbara-layout/Modal"
import Paragraph from "../barbara-layout/Paragraph"
import SkipLink from "../barbara-components/SkipLink"
import Portrait from "../barbara-assets/faces-with-eyes.webp"
import ContactForm from "../barbara-components/ContactForm"
import Footer from "../barbara-components/Footer"
import CardGrid from "../barbara-components/CardGrid"


export default function BarbaraPage() {
  return (
    <div className="container-animated" role="presentation">
      <SkipLink></SkipLink>
      <Navbar></Navbar>

      <Sidebar></Sidebar>

      <Section id="header">
        <div className="hello" role="presentation">
          <div className="greeting reveal">
            <h1>
              Hello,
              <br />
              I am Barbara Malta
            </h1>


          </div>
          <div className="description reveal">
            frontend developer
          </div>
        </div>
      </Section>

      <Section id="main">
        <div className="about-project" role="presentation">
          <img
            className="face reveal"
            src={Portrait}
            alt="Barbara with Potato the cat"
          />

          <div role="presentation">
            <h2 className="right-slide">About</h2>

            <Paragraph animate="right">
              When I coded my first “Hello World” in Notepad on Windows 98,
              it felt like the most significant and eye-opening activity in the
              world. However, aside from a number of gif-enriched personal pages and
              blogs, that period did not have any substantial outcomes.
            </Paragraph>

            <Paragraph animate="right">
              I renewed my study of code in 2021, and based on previous
              experiences, made web development my focus. I am now a great fan
              of flexbox-based layouts and JavaScript. I still have a certain
              affinity for retro-style design, but I refrain from using neon
              text effects.<br />
              <span className="flicker">Most of the time.</span>
            </Paragraph>

            <Paragraph animate="right">
              I am making efforts to focus more on the backend side of coding,
              because it seems more "serious", but whenever I see a
              well-designed website, I will spend hours checking what makes it
              work. It seems that every little topic I learn deserves its own
              stand-alone project. Not all ideas can be turned into reality, but
              below are the ones that made it.
            </Paragraph>
          </div>
        </div>
      </Section>

      <Section id="projects">
        <hr />
        <h2 className="reveal">Favourite projects</h2>
        <p className="reveal small-description">
          Some special projects deserved a whole page to themselves.
        </p>
        <div className="cards" role="presentation">
          <div className="card reveal" role="presentation">
            <a href="projects/blog.html">
              <div className="contain-thumb" role="presentation">
                <div className="thumb blog-1"></div>
              </div>
            </a>
            <h3>Star Squid Blog</h3>
            <p className="languages">
              react &middot; scss &middot; graphQL &middot; contentful api
            </p>
            <p>
              Going back to basics with a personal blog and into the future with
              modern web solutions.
            </p>
            <p>
              <a href="projects/blog.html" className="readmore">READ MORE</a>
              <i className="fa-solid fa-angles-right"></i>
            </p>
          </div>

          <div className="card reveal" role="presentation">
            <a href="projects/flashcards.html">
              <div className="contain-thumb" role="presentation">
                <div className="thumb flashcards-1"></div>
              </div>
            </a>
            <h3>Flipping Flashcards</h3>
            <p className="languages">javascript &middot; html &middot; css</p>
            <p>
              The study aid the world may not need. It serves flashcards from
              different fields of study and remembers how well you remember.
            </p>
            <p>
              <a href="projects/flashcards.html" className="readmore">READ MORE</a>
              <i className="fa-solid fa-angles-right"></i>
            </p>
          </div>

          <div className="card reveal" role="presentation">
            <a href="projects/clock.html">
              <div className="contain-thumb" role="presentation">
                <div className="thumb clock-1"></div>
              </div>
            </a>
            <h3>Workday Clock</h3>
            <p className="languages">javascript &middot; html &middot; css</p>
            <p>
              All the benefits of an analog clock without the awkwardness of
              roundness.
            </p>
            <p>
              <a href="projects/clock.html" className="readmore">READ MORE</a>
              <i className="fa-solid fa-angles-right"></i>
            </p>
          </div>
        </div>

        <hr />

        <h2 className="right-slide">Small projects</h2>
        <p className="reveal small-description">
          One-concept, quick projects — that I still think are cool enough to
          share.
        </p>

<CardGrid/>
        
      </Section>

      <Section id="contact" className="contact-form">
        <ContactForm></ContactForm>
      </Section>

<Footer></Footer>
      
{/* <Modal></Modal> */}


      {/* <div className="modal modal-closed">
        <p>
          <button className="modal-close" aria-label="close">✖</button>
        </p>
        <img id="modal-img" src="thumbs/clock.webp" alt="website screenshot" />
      </div>


      <div className="modal-overlay reveal"></div> */}
    </div> 

          )
}

export const Head = () => <title>Barbara's Portfolio</title>;

{/* const SEO = ({ children }) => (
  <>
    <title>Barbara's Portfolio</title>
    <link id="icon" rel="icon" href="global-icon" />
    {children}
  </>
)

export const Head = () => (
  <SEO>
    <link id="icon" rel="icon" href="icon-specific-for-this-page" />
  </SEO>
) */}