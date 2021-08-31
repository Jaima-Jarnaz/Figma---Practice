import { NavbarItems, NavItem } from "components/molecules/navbar-items";
import { useState } from "react";

export const Navbar: React.FC = ({}) => {
  // const [click, setClick] = useState(true);
  // const handleNavbar = () => {
  //   setClick(!click);
  // };

  return (
    <div className="o-navbar">
      <div className="o-navbar__heading">
        <p className="o-navbar__heading-text">Univé</p>
      </div>
      <div className="o-navbar__items">
        <NavbarItems navItem={NavItem}></NavbarItems>
      </div>
      <div className="o-navbar__box">
        <p>BOX</p>
      </div>
    </div>
  );
};
