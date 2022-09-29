import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

import NavItem from './NavItem';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  console.log(navActive, activeIdx);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <a className={styles.header}>
            <img
              src="/hibiscus.png"
              alt="Netlify Logo"
              className={styles.logo}
            />

            <h1 className="logo">qian.world</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
