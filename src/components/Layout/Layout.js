import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const Layout = props => (
  <div>
    <header className={styles.header}>
      <div className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/report">Chart</Link>
      </div>
    </header>
    <main className={styles.container}>{props.children}</main>
    <footer className={styles.footer}>Make your data smart</footer>
  </div>
);

export default Layout;
