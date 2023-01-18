import * as React from "react"

export default function(){
    return(<nav class="links">
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
  </nav>)
}