import * as React from "react"
import { Link } from "gatsby"
import "../styles/404.scss"


const NotFoundPage = () => {
  return (
    <main className="container">
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Back to home page</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
