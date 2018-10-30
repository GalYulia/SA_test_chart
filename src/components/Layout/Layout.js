import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';

const Layout = props => (
  <div>
    <header className={styles.header}>
      <div className={styles.navigation}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/chart">Chart</NavLink>
      </div>
    </header>
    <main className={styles.container}>{props.children}</main>
    <footer className={styles.footer}>Make your data smart</footer>
  </div>
);

export default Layout;
