import * as React from "react"
import "../styles/barbara-main.scss"
import ProjectCard from "../barbara-components/ProjectCard"
import Navbar from "../barbara-components/Navbar"
import Sidebar from "../barbara-components/Sidebar"
import Section from "../barbara-layout/Section"

export default function BarbaraPage() {
  return (
    <div className="container" role="presentation">
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

      <Section id="about">
        <div className="about-project" role="presentation">
          <img
            className="face reveal"
            src="img/faces-with-eyes.webp"
            alt="Barbara with Potato the cat"
          />

          <div role="presentation">
            <h2 className="right-slide">About</h2>

            <p className="right-slide">
              When I coded my first “Hello World” using Notepad on Windows 98,
              it felt like the most significant and eye-opening activity in the
              world. However, aside from a number of gif-enriched personal pages and
              blogs, that period did not have any substantial outcomes.
            </p>

            <p className="right-slide">
              I renewed my study of code in 2021, and based on previous
              experiences, made web development my focus. I am now a great fan
              of flexbox-based layouts and JavaScript. I still have a certain
              affinity for retro-style design, but I refrain from using neon
              text effects.<br />
              <span className="flicker">Most of the time.</span>
            </p>

            <p className="right-slide">
              I am making efforts to focus more on the backend side of coding,
              because it seems more "serious", but whenever I see a
              well-designed website, I will spend hours checking what makes it
              work. It seems that every little topic I learn deserves its own
              stand-alone project. Not all ideas can be turned into reality, but
              below are the ones that made it.
            </p>
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
        <div className="cards" role="presentation">
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
              program converts .csv employee data into nicely-formatted cards
              and offers a variety of filters for the results.
            </p>
            <p>
              <a href="https://github.com/Star-Squid/employee-directory"
                >code</a
              >
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
            <p>
              Art portfolio with modal image galleries and collapsible Sections
            </p>
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
              <a
                href="https://github.com/Landsil/landsil.github.io/tree/master/DiceStats"
                >code</a
              >
            </p>
          </div>

            <ProjectCard title="Wildflower Memory" address="https://star-squid.github.io/memory" code="https://github.com/Star-Squid/memory" languages={["javascript", "html", "css"]}  keyword="memory" description="Classic memory game with illustrations of British meadow flowers"></ProjectCard>

          <div className="card reveal" role="presentation">
            <a href="https://star-squid.github.io/memory">
              <div className="contain-thumb">
                <div className="thumb memory"></div>
              </div>
            </a>
            <h3>Wildflower Memory</h3>
            <p className="languages">javascript &middot; html &middot; css</p>
            <p>
              Classic memory game with illustrations of British meadow flowers
            </p>
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

            <p>
              While playing with Bootstrap, I may have invented the new hit app
            </p>
            <p>
              <a href="https://star-squid.github.io/hookd">link</a> &middot;
              <a href="https://github.com/Star-Squid/hookd">code</a>
            </p>
          </div>

          
        </div>
      </Section>

      <footer id="contact">
        <form
          className="contact-form reveal"
          method="post"
          action="https://formspree.io/f/xrgjjoyr"
        >
          <fieldset>
            <legend>
              <h2>Get in touch!</h2>
            </legend>
            <p>
              <label for="reason">what can I do for you?</label>
              <br />
              <input
                className="wide-input good-height"
                type="text"
                name="Reason"
                list="reason"
              />
              <datalist id="reason">
                <option>Work with me</option>
                <option>Help me out</option>
                <option>Feedback about this website</option>
                <option>Check out this dad joke</option>
              </datalist>
            </p>
            <p>
              <label for="name">name</label>
              <br />
              <input
                className="wide-input good-height"
                id="name"
                name="Name"
                type="text"
                placeholder="your name"
                required
              />
            </p>

            <p>
              <label for="email">email</label>
              <br />
              <input
                className="wide-input good-height"
                id="email"
                name="Email"
                type="email"
                placeholder="name@email.com"
                required
              />
            </p>

            <p>
              <label for="message">your message</label>
              <br />
              <textarea
                className="wide-input good-height"
                id="message"
                name="Message"
                rows="6"
                minlength="4"
                maxlength="3000"
                required
              ></textarea>
            </p>

            <p className="checkbox-area">
              <input
                className="good-height"
                type="checkbox"
                id="human"
                name="Human"
                value="human"
              />
              <label for="human"
                >&nbsp; I am a human, vegetable, or mineral</label
              >
            </p>

            <p className="button-area right-slide">
              <button type="reset" className="pushable">
                <span role="presentation" className="shadow"></span>
                <span role="presentation" className="edge"></span>
                <span className="frontbtn" role="button"> Clear </span>
              </button>

              <button type="submit" name="Submit" className="pushable primary">
                <span role="presentation" className="shadow"></span>
                <span role="presentation" className="edge"></span>
                <span className="frontbtn" role="button"> Send! </span>
              </button>
            </p>
          </fieldset>
        </form>
      </footer>

      <div className="egg">
        <a href="img/egg.gif">
          <i className="fa-solid fa-egg" title="closing thoughts"></i>
        </a>
      </div>

      <div className="modal modal-closed">
        <p>
          <button className="modal-close" aria-label="close">✖</button>
        </p>
        <img id="modal-img" src="thumbs/clock.webp" alt="website screenshot" />
      </div>

      <div className="modal-overlay reveal"></div>
    </div>

          )
}
