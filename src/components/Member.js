import React from 'react';
import { Link } from 'react-router-dom';

// style
import '../styles/member.scss';

function Member() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="memberWrap">
      <ul id="gnbMember">
        <li>
          <Link to="/mypage">
            <img src={path + '/images/myPage.svg'} alt="myPage" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img src={path + '/images/search.svg'} alt="search" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={path + '/images/cart.svg'} alt="cart" />
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <img src={path + '/images/collection.svg'} alt="collection" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Member;
