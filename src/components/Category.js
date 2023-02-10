import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryData from '../assets/DB/CategoryData';

// style
import '../styles/catergory.scss';

function Category() {
  const [category, setCategory] = useState(categoryData);
  // const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const onToggle = () => {
    menu.current.classList.toggle('on');
  };

  // useEffect(() => {
  //   const openSub = () => {
  //     open.addEventListener('click', () => {
  //       menu.current.classList.toggle('on');
  //     });
  //   };
  //   openSub();
  // }, []);

  return (
    <div className="category">
      <h2>PRODUCT</h2>
      <ul className="productMenu">
        {/* <li className="menu" ref={menu}>
          <div>
            <Link>MUSIC</Link>
            <span className="subArrow" onClick={() => onToggle()}></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>CD</Link>
            </li>
            <li>
              <Link>DVD</Link>
            </li>
            <li>
              <Link>etc.</Link>
            </li>
          </ul>
        </li>
        <li className="menu" ref={menu}>
          <div>
            <Link>PHOTO</Link>
            <span className="subArrow" onClick={() => onToggle()}></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Printed</Link>
            </li>
            <li>
              <Link>Photo Book</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>CONCERT</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Official Fanlight</Link>
            </li>
            <li>
              <Link>Concert Goods</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>LIVING</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Kitchen</Link>
            </li>
            <li>
              <Link>F&B</Link>
            </li>
            <li>
              <Link>Tech</Link>
            </li>
            <li>
              <Link>Book</Link>
            </li>
            <li>
              <Link>Pet</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>BEAUTY</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Skin Care</Link>
            </li>
            <li>
              <Link>Make Up</Link>
            </li>
            <li>
              <Link>Cleansing</Link>
            </li>
            <li>
              <Link>Body & Hair</Link>
            </li>
            <li>
              <Link>Pack & Masks</Link>
            </li>
            <li>
              <Link>Perfume</Link>
            </li>
            <li>
              <Link>Tool</Link>
            </li>
            <li>
              <Link>Men's</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>STATIONERY</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Note</Link>
            </li>
            <li>
              <Link>Office</Link>
            </li>
            <li>
              <Link>Pen</Link>
            </li>
            <li>
              <Link>Deco</Link>
            </li>
            <li>
              <Link>Binder</Link>
            </li>
            <li>
              <Link>Toy</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>FASHION</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Clothing</Link>
            </li>
            <li>
              <Link>Acc</Link>
            </li>
            <li>
              <Link>Jewelry</Link>
            </li>
          </ul>
        </li>
        <li className="menu">
          <div>
            <Link>CUSTOMIZING</Link>
            <span className="subArrow"></span>
          </div>
          <ul className="subMenu">
            <li>
              <Link>Phone Case</Link>
            </li>
            <li>
              <Link>Fashion</Link>
            </li>
            <li>
              <Link>Acc</Link>
            </li>
          </ul>
        </li> */}
        {category.map(item => {
          return (
            <li key={item.id} className="menu" ref={menu}>
              <div>
                <Link to={item.menu}>{item.menuTitle}</Link>
                <span className="subArrow" onClick={() => onToggle()}></span>
              </div>
              <ul className="subMenu">
                <li>
                  <Link>{item.subTitle1}</Link>
                </li>
                <li>
                  <Link>{item.subTitle2}</Link>
                </li>
                <li>
                  <Link>{item.subTitle3}</Link>
                </li>
                <li>
                  <Link>{item.subTitle4}</Link>
                </li>
                <li>
                  <Link>{item.subTitle5}</Link>
                </li>
                <li>
                  <Link>{item.subTitle6}</Link>
                </li>
                <li>
                  <Link>{item.subTitle7}</Link>
                </li>
                <li>
                  <Link>{item.subTitle8}</Link>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
