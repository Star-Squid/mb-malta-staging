import * as React from "react"
import "../styles/barbara-main.scss"
import Navbar from "../barbara-components/Navbar"
import Sidebar from "../barbara-components/Sidebar"
import Section from "../barbara-layout/Section"
import Modal from "../barbara-layout/Modal"
import Paragraph from "../barbara-layout/Paragraph"

export default function BlogProject() {
  return (
    <div className="container" role="presentation">
      <Navbar></Navbar>

      <Sidebar></Sidebar>
      <Section id="header">
        <div className="hello" role="presentation">
          <div className="greeting reveal" role="heading">
            <h1>Star Squid Blog</h1>
          </div>
        </div>
      </Section>

      <Section id="projects">
        <p className="reveal">
          <a href="https://magnificent-griffin-60d663.netlify.app/">link</a>
          &middot; <a href="https://github.com/Star-Squid/squidblog">code</a>
        </p>
        <p className="reveal languages">
          react &middot; scss &middot; graphQL &middot; contentful api
        </p>

        <div className="about-project" role="presentation">
          <p className="reveal">
            This website doesn't have an interesting origin story, unless
            googling "best projects to learn React" counts as a story. The Star
            Squid Blog was built using Gatsby, and fetches its post content from
            Contentful.
            <br /><br />
            On the face of it, this is not an earth-shaking project idea...
            except to me, in a way, it was. Working on this site, I felt it was
            all coming together - everything I've ever learned about web
            development was for something, and that something was this. Of
            course HTML is for writing JSX, of course CSS is meant to be used in
            modules, of course constructing a page with reusable components is
            the way to go. It turned out to be the most educational and
            rewarding project I've ever done.
          </p>

          <a className="modal-toggle">
            <div className="contain-thumb reveal" role="presentation">
              <div className="thumb blog-1" role="presentation"></div>
            </div>
          </a>

          <a className="modal-toggle">
            <div className="contain-thumb reveal" role="presentation">
              <div className="thumb blog-2" role="presentation"></div>
            </div>
          </a>

          <p className="reveal">
            <b className="ordinal">01.</b><br />
            I started by designing a layout I wanted to work towards; I sketched
            my layout on a piece of paper and then built a plain HTML + CSS
            pair. The colour scheme was inspired by abstract book covers from
            the 1980s.
            <br /><br />
            Next I started up a Gatsby project and created my page components:
            index (post list), about and contact. I also created a primary style
            sheet to tie the graphics together before creating the Layout
            component that would enclose my page contents. Some of the
            components have their own corresponding scss modules, where it
            seemed appropriate. All scss files use global variables from a
            separate file.
          </p>

          <p className="reveal">
            <b className="ordinal">02.</b><br />
            Next, it was time to install the gatsby-source-contentful plugin and
            connect the blog content. I created a page template that would be
            used to generate individual post pages. At this point I hit the
            greatest snag in this project. Until quite recently, the Contentful
            API used to serve rich text data in JSON format, and the wealth of
            instructions I thought I had at my fingertips referred to that, now
            outdated, format. Currently rich text posts are in raw format, and
            the only source of information is official documentation, which I
            did not manage to implement. The best I can do for now is JSON.parse
            the post content before rendering it with documentToReactComponents
            from @contentful/rich-text-react-renderer. This method results in
            readable plain text, but no access to formatting or image assets. I
            will keep trying different things for now before giving up on
            Contentful.
          </p>

          <a className="modal-toggle">
            <div className="contain-thumb reveal" role="presentation">
              <div className="thumb blog-3" role="presentation"></div>
            </div>
          </a>

          <a className="modal-toggle">
            <div className="contain-thumb reveal" role="presentation">
              <div className="thumb blog-4" role="presentation"></div>
            </div>
          </a>

          <p className="reveal">
            <b className="ordinal">05.</b><br />
            Next I tackled the SEO by editing the siteMetadata Section of
            gatsby-config and made sure I could fetch this information on each
            page by creating a custom hook. An SEO component renders this data
            in the head of each page. The blog post template uses the post title
            as its page title.
          </p>

          <p className="reveal">
            <b className="ordinal">06.</b><br />
            When all of that was finished, I deployed the blog through Netlify
            for the world to see. Overall, I am really happy with what I
            accomplished here. Features I would like to add in the future are a
            dark theme (almost ready), a tagging system, a "next post" button
            linking directly to a newer/older post, and perhaps the option to
            comment on posts. It could be my own bootleg social media!
          </p>

          <a className="modal-toggle">
            <div className="contain-thumb reveal" role="presentation">
              <div className="thumb blog-5" role="presentation"></div>
            </div>
          </a>
        </div>
      </Section>

      <footer></footer>
    </div>
  )
}

export const Head = () => <title>Blog - Barbara's Portfolio</title>;