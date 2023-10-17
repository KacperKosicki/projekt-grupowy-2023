import React from 'react';
import styles from './CartPage.module.scss';
import Cart from '../../features/Cart/Cart';

const CartPage = () => {
  return (
    <div className={styles.root}>
      <Cart />
    </div>
  );
};

export default CartPage;
