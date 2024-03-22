import React from 'react';

function NavItem(props) {
  return (
    <li className={`nav-item`}>
      <a href={`#${props.url}`} className="nav-link py-2 lg:py-4 block">
        {props.label}
      </a>
    </li>
  );
}

export default NavItem;
