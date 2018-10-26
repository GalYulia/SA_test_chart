import React, { Component } from 'react';
import UserList from '../UserList/UserList';
import products from '../../api/data.js';
// import styles from './styles.css';


class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // axios.get('/path/to/user-api').then((response) => {
    //   this.setState({ products: response.data });
    // });
    console.log('data', products);
    this.setState({ products: products });
  }

  render() {
    console.log('data', products);
    return (<UserList products={this.state.products} />);
  }
}


export default UserListContainer;
