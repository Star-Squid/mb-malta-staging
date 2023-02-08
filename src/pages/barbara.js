import * as React from "react";
import Navbar from "../barbara-components/Navbar";
import Sidebar from "../barbara-components/Sidebar";
import Section from "../barbara-layout/Section";
// import Modal from "../barbara-layout/Modal"
import Paragraph from "../barbara-layout/Paragraph";
import SkipLink from "../barbara-components/SkipLink";
import Portrait from "../barbara-assets/faces-with-eyes.webp";
import ContactForm from "../barbara-components/ContactForm";
import Footer from "../barbara-components/Footer";
import { SmallCardGrid, LargeCardGrid } from "../barbara-components/CardGrid";
import Heading from "../barbara-layout/Heading";
import "../styles/barbara-main.scss"

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
              <br />I am Barbara Malta
            </h1>
          </div>
          <div className="description reveal">frontend developer</div>
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
              When I coded my first “Hello World” in Notepad on Windows 98, it
              felt like the most significant and eye-opening activity in the
              world. However, aside from a number of gif-enriched personal pages
              and blogs, that period did not have any substantial outcomes.
            </Paragraph>

            <Paragraph animate="right">
              I renewed my study of code in 2021, and based on previous
              experiences, made web development my focus. I am now a great fan
              of flexbox-based layouts and JavaScript. I still have a certain
              affinity for retro-style design, but I refrain from using neon
              text effects.
              <br />
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
        
        <Heading>Favourite projects</Heading>
        <p className="reveal small-description">
          Some special projects deserved a whole page to themselves.
        </p>

        <LargeCardGrid />

        {/* <hr /> */}
        {/* <br/> */}
        </Section>

<Section id="smallprojects">

        <Heading>Small projects</Heading>
        <p className="reveal small-description">
          One-concept, quick projects — that I still think are cool enough to
          share.
        </p>

        <SmallCardGrid />
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
  );
}

export const Head = () => <title>Barbara's Portfolio</title>;

{
  /* const SEO = ({ children }) => (
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
) */
}
