import * as React from "react";
import { Link } from "gatsby";
import "../styles/404.scss";

const NotFoundPage = () => {
  return (
    <div className="contain-404 grid-centered">
      <h1 className="h1">Page not found</h1>
      <p className="subtitle">
        Sorry, the page you're looking for is not at this address.
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
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
