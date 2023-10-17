import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'d-flex justify-content-between ' + styles.header}>
          <div>Cart</div>
          <div className={styles.home}>
            <FontAwesomeIcon icon={faHouse} className={styles.iconHouse} />
            &gt; Cart
          </div>
        </div>

        <div className={styles.cart}>
          <Table className={styles.tableCart}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.firstCol}></th>
                <th className={styles.secondCol}></th>
                <th className={styles.thirdCol}>product</th>
                <th className={styles.fourthCol}>price </th>
                <th className={styles.fifthCol}>quantity</th>
                <th className={styles.sixthCol}>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faCircleXmark} className={styles.mark} />
                  </div>
                </td>
                <td>
                  <div className={styles.photo}></div>
                </td>
                <td>
                  <div className={styles.product}>ProductPlaceholder 1</div>
                </td>
                <td>
                  <div className={styles.price}>$5.00</div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    <div>
                      <button onClick={handleDecrement} className={styles.leftButton}>
                        -
                      </button>
                      <input
                        type='text'
                        value={value}
                        step='1'
                        onChange={e => setValue(Number(e.target.value))}
                      />
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.total}>$5.00</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faCircleXmark} className={styles.mark} />
                  </div>
                </td>
                <td>
                  <div className={styles.photo}></div>
                </td>
                <td>
                  <div className={styles.product}>ProductPlaceholder 2</div>
                </td>
                <td>
                  <div className={styles.price}>$67.00</div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    <div>
                      <button onClick={handleDecrement} className={styles.leftButton}>
                        -
                      </button>
                      <input
                        type='text'
                        value={value}
                        step='1'
                        onChange={e => setValue(Number(e.target.value))}
                      />
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.total}>$67.00</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faCircleXmark} className={styles.mark} />
                  </div>
                </td>
                <td>
                  <div className={styles.photo}></div>
                </td>
                <td>
                  <div className={styles.product}>ProductPlaceholder 3</div>
                </td>
                <td>
                  <div className={styles.price}>$20.00</div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    <div>
                      <button onClick={handleDecrement} className={styles.leftButton}>
                        -
                      </button>
                      <input
                        type='text'
                        value={value}
                        step='1'
                        onChange={e => setValue(Number(e.target.value))}
                      />
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.total}>$20.00</div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div className={styles.coupon}>
                    <input type='text' placeholder='  Coupon code'></input>
                    <button className={styles.button}>apply coupon</button>
                  </div>
                </td>
                <td></td>
                <td colSpan={2}>
                  <div className={'d-flex justify-content-end ' + styles.updateCart}>
                    <button className={styles.button}>update cart</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className={styles.cartTotal}>
          <Table className={styles.tableTotal}>
            <thead className={styles.tableHeadTotal}>
              <tr>
                <th className={styles.firstColTotal}></th>
                <th className={styles.secondColTotal}>Cart totals</th>
                <th className={styles.thirdColTotal}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.subtotal}>Subtotal</td>
                <td>
                  <div className={styles.price}>$92.00</div>
                </td>
                <td className={styles.empty}></td>
              </tr>
              <tr>
                <td className={styles.subtotal}>Total</td>
                <td>
                  <div className={styles.price}>$92.00</div>
                </td>
                <td className={styles.empty}></td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <div className={'d-flex justify-content-center '}>
                    <NavLink to='/'>
                      <button className={styles.proceed}>proceed to checkout</button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
