import * as React from "react"
import "../styles/barbara-main.scss"
// import grain from "../assets/grain.png"
// import Hero from "../assets/keyboard.webp"
import ProjectCard from "../components/ProjectCard"

export default function BarbaraPage() {
  return (
    <div class="container" role="presentation">
      <nav class="links">
        <ul>
          <li class="skip-link">
            <a href="#about"> skip to main content</a>
          </li>
          <li>
            <a href="#header">
              <h2 class="logo">BM</h2>
            </a>
          </li>
          <li>
            <a href="#about"> about </a>
          </li>
          <li>
            <a href="#projects"> projects </a>
          </li>
          <li>
            <a href="#contact"> contact </a>
          </li>
        </ul>
      </nav>

      <nav class="icons">
        <ul>
          <li>
            <a href="mailto:barbara@mb-malta.co.uk" aria-label="Email"
              ><i class="fa-solid fa-envelope"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/barbara-malta" aria-label="LinkedIn"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </li>
          
          <li>
            <a href="https://github.com/Star-Squid" aria-label="Github"
              ><i class="fa-brands fa-github"></i
            ></a>
          </li>
        </ul>
      </nav>

      <section id="header">
        <div class="hello" role="presentation">
          <div class="greeting reveal">
            <h1>
              Hello,
              <br />
              I am Barbara Malta
            </h1>
          </div>
          <div class="description reveal">
            frontend developer
          </div>
        </div>
      </section>

      <section id="about">
        <div class="about-project" role="presentation">
          <img
            class="face reveal"
            src="img/faces-with-eyes.webp"
            alt="Barbara with Potato the cat"
          />

          <div role="presentation">
            <h2 class="right-slide">About</h2>

            <p class="right-slide">
              When I coded my first “Hello World” using Notepad on Windows 98,
              it felt like the most significant and eye-opening activity in the
              world. However, aside from a number of gif-enriched personal pages and
              blogs, that period did not have any substantial outcomes.
            </p>

            <p class="right-slide">
              I renewed my study of code in 2021, and based on previous
              experiences, made web development my focus. I am now a great fan
              of flexbox-based layouts and JavaScript. I still have a certain
              affinity for retro-style design, but I refrain from using neon
              text effects.<br />
              <span class="flicker">Most of the time.</span>
            </p>

            <p class="right-slide">
              I am making efforts to focus more on the backend side of coding,
              because it seems more "serious", but whenever I see a
              well-designed website, I will spend hours checking what makes it
              work. It seems that every little topic I learn deserves its own
              stand-alone project. Not all ideas can be turned into reality, but
              below are the ones that made it.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <hr />
        <h2 class="reveal">Favourite projects</h2>
        <p class="reveal small-description">
          Some special projects deserved a whole page to themselves.
        </p>
        <div class="cards" role="presentation">
          <div class="card reveal" role="presentation">
            <a href="projects/blog.html">
              <div class="contain-thumb" role="presentation">
                <div class="thumb blog-1"></div>
              </div>
            </a>
            <h3>Star Squid Blog</h3>
            <p class="languages">
              react &middot; scss &middot; graphQL &middot; contentful api
            </p>
            <p>
              Going back to basics with a personal blog and into the future with
              modern web solutions.
            </p>
            <p>
              <a href="projects/blog.html" class="readmore">READ MORE</a>
              <i class="fa-solid fa-angles-right"></i>
            </p>
          </div>

          <div class="card reveal" role="presentation">
            <a href="projects/flashcards.html">
              <div class="contain-thumb" role="presentation">
                <div class="thumb flashcards-1"></div>
              </div>
            </a>
            <h3>Flipping Flashcards</h3>
            <p class="languages">javascript &middot; html &middot; css</p>
            <p>
              The study aid the world may not need. It serves flashcards from
              different fields of study and remembers how well you remember.
            </p>
            <p>
              <a href="projects/flashcards.html" class="readmore">READ MORE</a>
              <i class="fa-solid fa-angles-right"></i>
            </p>
          </div>

          <div class="card reveal" role="presentation">
            <a href="projects/clock.html">
              <div class="contain-thumb" role="presentation">
                <div class="thumb clock-1"></div>
              </div>
            </a>
            <h3>Workday Clock</h3>
            <p class="languages">javascript &middot; html &middot; css</p>
            <p>
              All the benefits of an analog clock without the awkwardness of
              roundness.
            </p>
            <p>
              <a href="projects/clock.html" class="readmore">READ MORE</a>
              <i class="fa-solid fa-angles-right"></i>
            </p>
          </div>
        </div>

        <hr />

        <h2 class="right-slide">Small projects</h2>
        <p class="reveal small-description">
          One-concept, quick projects — that I still think are cool enough to
          share.
        </p>
        <div class="cards" role="presentation">
          <div class="card reveal" role="presentation">
            <a href="https://github.com/Star-Squid/employee-directory">
              <div class="contain-thumb" role="presentation">
                <div class="thumb employee"></div>
              </div>
            </a>
            <h3>Employee Directory</h3>
            <p class="languages">react &middot; css</p>
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

          <div class="card reveal" role="presentation">
            <a href="https://star-squid.art">
              <div class="contain-thumb" role="presentation">
                <div class="thumb art"></div>
              </div>
            </a>
            <h3>Star Squid Studio</h3>
            <p class="languages">javascript &middot; html &middot; css</p>
            <p>
              Art portfolio with modal image galleries and collapsible sections
            </p>
            <p>
              <a href="https://star-squid.art">link</a> &middot;
              <a href="https://github.com/Star-Squid/art-portfolio">code</a>
            </p>
          </div>

          <div class="card reveal" role="presentation">
            <a href="https://mb-malta.co.uk/DiceStats/">
              <div class="contain-thumb" role="presentation">
                <div class="thumb dice"></div>
              </div>
            </a>
            <h3>Dice Stats</h3>
            <p class="languages">
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

          <div class="card reveal" role="presentation">
            <a href="https://star-squid.github.io/memory">
              <div class="contain-thumb">
                <div class="thumb memory"></div>
              </div>
            </a>
            <h3>Wildflower Memory</h3>
            <p class="languages">javascript &middot; html &middot; css</p>
            <p>
              Classic memory game with illustrations of British meadow flowers
            </p>
            <p>
              <a href="https://star-squid.github.io/memory">link</a> &middot;
              <a href="https://github.com/Star-Squid/memory">code</a>
            </p>
          </div>

          <div class="card reveal" role="presentation">
            <a href="https://star-squid.github.io/flex-cv">
              <div class="contain-thumb" role="presentation">
                <div class="thumb flex-cv" role="presentation"></div>
              </div>
            </a>
            <h3>Flex CV</h3>
            <div class="languages">html &middot; css</div>
            <p>So many inflexible jobs can fit into flex containers</p>
            <p>
              <a href="https://star-squid.github.io/flex-cv">link</a> &middot;
              <a href="https://github.com/Star-Squid/flex-cv">code</a>
            </p>
          </div>

          
          <div class="card reveal" role="presentation">
            <a href="https://star-squid.github.io/high-five">
              <div class="contain-thumb" role="presentation">
                <div class="thumb high-five"></div>
              </div>
            </a>
            <h3>High Five!</h3>
            <p class="languages">javascript &middot; html &middot; css</p>

            <p>A game of treats and tricks with my cat</p>
            <p>
              <a href="https://star-squid.github.io/high-five">link</a> &middot;
              <a href="https://github.com/Star-Squid/high-five">code</a>
            </p>
          </div>

          <div class="card reveal" role="presentation">
            <a href="https://star-squid.github.io/hookd">
              <div class="contain-thumb" role="presentation">
                <div class="thumb hookd"></div>
              </div>
            </a>
            <h3>Hookd</h3>
            <p class="languages">javascript &middot; html &middot; css</p>

            <p>
              While playing with Bootstrap, I may have invented the new hit app
            </p>
            <p>
              <a href="https://star-squid.github.io/hookd">link</a> &middot;
              <a href="https://github.com/Star-Squid/hookd">code</a>
            </p>
          </div>

          
        </div>
      </section>

      <footer id="contact">
        <form
          class="contact-form reveal"
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
                class="wide-input good-height"
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
                class="wide-input good-height"
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
                class="wide-input good-height"
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
                class="wide-input good-height"
                id="message"
                name="Message"
                rows="6"
                minlength="4"
                maxlength="3000"
                required
              ></textarea>
            </p>

            <p class="checkbox-area">
              <input
                class="good-height"
                type="checkbox"
                id="human"
                name="Human"
                value="human"
              />
              <label for="human"
                >&nbsp; I am a human, vegetable, or mineral</label
              >
            </p>

            <p class="button-area right-slide">
              <button type="reset" class="pushable">
                <span role="presentation" class="shadow"></span>
                <span role="presentation" class="edge"></span>
                <span class="frontbtn" role="button"> Clear </span>
              </button>

              <button type="submit" name="Submit" class="pushable primary">
                <span role="presentation" class="shadow"></span>
                <span role="presentation" class="edge"></span>
                <span class="frontbtn" role="button"> Send! </span>
              </button>
            </p>
          </fieldset>
        </form>
      </footer>

      <div class="egg">
        <a href="img/egg.gif">
          <i class="fa-solid fa-egg" title="closing thoughts"></i>
        </a>
      </div>

      <div class="modal modal-closed">
        <p>
          <button class="modal-close" aria-label="close">✖</button>
        </p>
        <img id="modal-img" src="thumbs/clock.webp" alt="website screenshot" />
      </div>

      <div class="modal-overlay reveal"></div>
    </div>

          )
}
