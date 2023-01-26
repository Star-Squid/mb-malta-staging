import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="egg">
      <a href="../barbara-assets/egg.gif">
        <FontAwesomeIcon icon={solid("egg")} />
      </a>
    </div>
  );
}
