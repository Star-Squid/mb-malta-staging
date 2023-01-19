import * as React from "react";

export default function Paragraph(props) {
    if (props.animate === "right"){
        return (<p className="right-slide" >{props.children}</p>);
    } else {
        return (<p className="reveal" >{props.children}</p>);
    };

}
