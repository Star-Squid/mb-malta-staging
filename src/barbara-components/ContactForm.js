import * as React from "react";
import Button from "./Button";

  // const content = {
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  //   d : "",
  // }

function TextInput(props){
return(<p>
  <label htmlFor={props.keyword}>{props.label}</label>
  <br />
  <input
    className="wide-input good-height"
    id={props.keyword}
    name={props.keyword}
    type="text"
    placeholder={props.placeholder}
    required
  />
</p>)
}

// function DataList(props){
//   return(
//     <p>
//     <label htmlFor={props.keyword}>{props.label}</label>
//     <br />
//     <input
//       className="wide-input good-height"
//       type="text"
//       name={props.keyword}
//       list={props.keyword}
//       placeholder={props.placeholder}
//     />
//     <datalist id={props.keyword}>
//       <option>Work with me</option>
//       <option>Help me out</option>
//       <option>Feedback about this website</option>
//       <option>Check out this dad joke</option>
//     </datalist>
//   </p>
//   )
// }

function EmailInput(props){
return(        <p>
  <label htmlFor={props.keyword}>{props.label}</label>
  <br />
  <input
    className="wide-input good-height"
    id={props.keyword}
    name={props.keyword}
    type={props.keyword}
    placeholder={props.placeholder}
    required
  />
</p>)

}

function TextBox(props){
  return(
    <p>
    <label htmlFor={props.keyword}>{props.label}</label>
    <br />
    <textarea
      className="wide-input good-height"
      placeholder={props.placeholder}
      id={props.keyword}
      name={props.keyword}
      rows="6"
      minLength="4"
      maxLength="3000"
      required
    ></textarea>
  </p>
  )
}

function CheckBox(props){
  return(
    <p className="checkbox-area">
    <input
      className="good-height"
      type="checkbox"
      id={props.keyword}
      name={props.keyword}
      value={props.keyword}
    />
    <label htmlFor={props.keyword}>&nbsp; {props.label}</label>
  </p>
  )
}



export default function ContactForm(props) {

  return (
    <form
      className="contact-form reveal"
      method="post"
      action="https://formspree.io/f/xrgjjoyr"
    >
      <fieldset>
        <legend>
          <h2>Get in touch!</h2>
        </legend>


        {/* <DataList keyword="reason" label="what can I do for you?" placeholder="select or type"/> */}


        <p>
          <label htmlFor="reason">what can I do for you?</label>
          <br />
          <input
            className="wide-input good-height"
            type="text"
            name="Reason"
            list="reason"
            placeholder="select or type"
          />
          <datalist id="reason">
            <option>Work with me</option>
            <option>Help me out</option>
            <option>Feedback about this website</option>
            <option>Check out this dad joke</option>
          </datalist>
        </p>

        <TextInput keyword="name" label="name" placeholder="your name"/>

        <EmailInput keyword="email" label="email" placeholder="name@email.com"/>

        <TextBox keyword="message" label="your message" placeholder={props.placeholder}/>

        <CheckBox keyword="human" label="I am a human, vegetable, or mineral"/>


        <p className="button-area right-slide">

        <Button type="reset" primary="yes" text="Clear" name="Clear"/>
        <Button type="submit" primary="yes" text="Send!" name="Submit"/>


          {/* <button type="reset" className="pushable">
            <span role="presentation" className="shadow"></span>
            <span role="presentation" className="edge"></span>
            <span className="frontbtn" role="button">
              {" "}
              Clear{" "}
            </span>
          </button>

          <button type="submit" name="Submit" className="pushable primary">
            <span role="presentation" className="shadow"></span>
            <span role="presentation" className="edge"></span>
            <span className="frontbtn" role="button">
              {" "}
              Send!{" "}
            </span>
          </button> */}
          
        </p>
      </fieldset>
    </form>
  );
}
