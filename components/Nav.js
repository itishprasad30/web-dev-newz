import React from "react";
import NavStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul className={NavStyles.ul}>
        <li className={NavStyles.li}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
