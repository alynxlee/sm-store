import React from "react";
import { Link } from "react-router-dom";

// style
import "../styles/nav.scss";

function Nav() {
  return (
    <nav>
      <ul id="gnb">
        <li>
          <Link to="/celeb">CELEB</Link>
        </li>
        <li>
          <Link to="/">PRODUCT</Link>
        </li>
        <li>
          <Link to="/pick">&amp;P!CK</Link>
        </li>
        <li>
          <Link to="/event">EVENT</Link>
        </li>
        <li>
          <Link to="/metepassport">META-PASSPORT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
