import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

export default function(){
    return(<nav class="icons">
    <ul>
      <li>            <FontAwesomeIcon icon={solid('user-secret')} />
</li>
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
  </nav>)
}