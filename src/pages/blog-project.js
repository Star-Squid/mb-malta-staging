import * as React from "react";
import Navbar from "../barbara-components/Navbar";
import Sidebar from "../barbara-components/Sidebar";
import Section from "../barbara-layout/Section";
import Modal from "../barbara-layout/Modal";
import Paragraph from "../barbara-layout/Paragraph";
import SkipLink from "../barbara-components/SkipLink";
import ContactForm from "../barbara-components/ContactForm";
import Footer from "../barbara-components/Footer";
import { SmallCardGrid, LargeCardGrid } from "../barbara-components/CardGrid";
import Heading from "../barbara-layout/Heading";
import "../styles/barbara-main.scss";
import * as ProjectList from "../barbara-components/ProjectList";
import Languages from "../barbara-components/Languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const data = ProjectList.largeProjects[0];

function Illustration(props) {
  return (
    <a class="modal-toggle">
      <div class="contain-thumb reveal" role="presentation">
        <div class="thumb blog-3" role="presentation">
          <img alt="" src={props.src} />
        </div>
      </div>
    </a>
  );
}

function TextBlock(props) {
  return (
    <p class="reveal">
      <b class="ordinal">{props.ordinal + "."}</b>
      <br />
      {props.text}
    </p>
  );
}

function ordinalNumber(n){
  n= n+1
  if (n<10){return (n="0" + n)}
  else {return n}
}

function ArticleGrid() {
  return (
    <div class="about-project" role="presentation">
{data.paragraphs.map((paragraph, i) => {return(<><TextBlock text={paragraph} ordinal={ordinalNumber(i)}/><Illustration src={data.images[i]} /></>)})}
    </div>
  );
}


export default function BlogPage() {
  return (
    <div className="container-animated" role="presentation">
      <SkipLink></SkipLink>
      <Navbar></Navbar>

      <Sidebar></Sidebar>

      <Section id="header">
        <div className="hello" role="presentation">
          <div className="greeting reveal">
            <h1>{data.title}</h1>
          </div>
          <div className="description reveal">
            <p class="languages">
              <Languages languageArr={data.languages} />
            </p>
            <p>{" "}</p>
            <p>
              <a href={data.address}>
                <FontAwesomeIcon icon={solid("link")} /> link
              </a>
            </p>
            <p>
              <a href={data.code}>
                <FontAwesomeIcon icon={brands("github")} /> code
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section id="main">
        <ArticleGrid data="data" />
      </Section>

      <Section id="contact" className="contact-form">
        <ContactForm></ContactForm>
      </Section>

      {/* <Footer></Footer> */}
    </div>
  );
}

export const Head = () => <title>Barbara's Portfolio || {data.title}</title>;
