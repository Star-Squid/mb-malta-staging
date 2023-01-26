import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function () {
  return (
    <nav className="icons-bar">
      <ul>
      
        <li>
          <a href="mailto:barbara@mb-malta.co.uk" aria-label="Email">
            <FontAwesomeIcon icon={solid("envelope")} />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/barbara-malta"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={brands("linkedin")} />
          </a>
        </li>

        <li>
          <a href="https://github.com/Star-Squid" aria-label="Github">
            <FontAwesomeIcon icon={brands("github")} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
