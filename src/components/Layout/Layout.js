import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './styles.css';

const Layout = props => (
  <div>
    <header><h1>Рецепты</h1></header>
    <aside>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </aside>
    <main>{props.children}</main>
    <footer>footer</footer>
  </div>
);

export default Layout;
