import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export function Floor() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Nav className="nav-pills-custom">
      <NavItem>
        <NavLink
          onClick={() => handleNavLinkClick(0)}
          active={activeIndex === 0}
        >
          Floor 01
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => handleNavLinkClick(1)}
          active={activeIndex === 1}
        >
          Floor 02
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => handleNavLinkClick(2)}
          active={activeIndex === 2}
        >
          Floor 03
        </NavLink>
      </NavItem>
    </Nav>
  );
}
