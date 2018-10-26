import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './styles.css';

const UserList = (props) => {
  console.log('props', props);
  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  );
};


export default UserList;
