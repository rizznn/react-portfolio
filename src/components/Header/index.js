import React from 'react';

function Header(props) {
  return (
    <header className="jumbo">
      {props.children}
    </header>
  );
}

export default Header;