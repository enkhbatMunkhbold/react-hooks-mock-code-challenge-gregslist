import React from "react";
import Search from "./Search";

function Header({ onHandleSubmmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSubmmit={onHandleSubmmit}/>
    </header>
  );
}

export default Header;
