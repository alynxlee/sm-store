import { Component } from "react";
import { Link } from "react-router-dom";

class Test extends Component {
  state = { isClicked: false };

  onClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { isClicked } = this.state;
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
    } = this.props;
    return (
      <li key={id} className={`menu ${isClicked ? "on" : ""}`}>
        <div>
          <Link to={menu}>{menuTitle}</Link>
          <span className="subArrow" onClick={this.onClick}></span>
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
  }
}

export default Test;
