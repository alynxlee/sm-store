import { Link } from "react-router-dom";

// components
import Nav from "./Nav";
import Member from "./Member";

// style
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <ul className="client">
        <li>
          <Link to="login" className="login">
            Login
          </Link>
        </li>
        <li>
          <Link to="join" className="join">
            Join
          </Link>
        </li>
        <li>
          <select name="lang" className="lang">
            <option value="kor">KOR</option>
            <option value="eng">ENG</option>
            <option value="jpn">JPN</option>
            <option value="chn">CHN</option>
          </select>
        </li>
      </ul>
      <div className="navWrapper">
        <Nav />
        <Link to="/" className="logo">
          Logo
        </Link>
        <Member />
      </div>
    </header>
  );
}

export default Header;
