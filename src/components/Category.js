import React, { useState } from "react";
import { Link } from "react-router-dom";

import categoryData from "../assets/DB/CategoryData";

// style
import "../styles/catergory.scss";

function Category() {
  const [category, setCategory] = useState(categoryData);

  const [isShow, setIsShow] = useState(null);
  const onToggle = (id) => {
    setIsShow((prev) => {
      return prev === id ? null : id;
    });
  };

  return (
    <div className="category">
      <h2>PRODUCT</h2>
      <ul className="productMenu">
        {category.map((item) => {
          const {
            id,
            menu,
            menuTitle,
            subTitle1,
            subTitle2,
            subTitle3,
            subTitle4,
            subTitle5,
            subTitle6,
            subTitle7,
            subTitle8,
          } = item;
          return (
            <li key={id} className={`menu ${isShow === id ? "on" : ""}`}>
              <div>
                <Link to={menu}>{menuTitle}</Link>
                <span className="subArrow" onClick={() => onToggle(id)}></span>
              </div>
              <ul className="subMenu">
                <li>
                  <Link>{subTitle1}</Link>
                </li>
                <li>
                  <Link>{subTitle2}</Link>
                </li>
                <li>
                  <Link>{subTitle3}</Link>
                </li>
                <li>
                  <Link>{subTitle4}</Link>
                </li>
                <li>
                  <Link>{subTitle5}</Link>
                </li>
                <li>
                  <Link>{subTitle6}</Link>
                </li>
                <li>
                  <Link>{subTitle7}</Link>
                </li>
                <li>
                  <Link>{subTitle8}</Link>
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
