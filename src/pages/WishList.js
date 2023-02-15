import '../styles/wishlist.scss';

function WishList() {
  return (
    <div className="wishlistWrapper">
      <div className="memberInfoWrapper">
        <div className="memberInfo">
          <div>celeb logo</div>
          <ul>
            <li>터래기님</li>
            <li>PINK</li>
          </ul>
          <ul>
            <li>
              <span>주문내역</span>
              <span>3</span>
            </li>
            <li>
              <span>취소/교환/반품</span>
              <span>0/0/0</span>
            </li>
            <li>
              <span>적립금</span>
              <span>320 P</span>
            </li>
            <li>
              <span>쿠폰</span>
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WishList;
