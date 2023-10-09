import styles from './Promo.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { getAll } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Promo = () => {
  const products = useSelector(state => getAll(state));

  const promoProduct1 = products[2];
  const promoProduct2 = products[24];
  const promoProduct3 = products[25];
  const promoProduct4 = products[23];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          {/* Picture on the left */}
          <div className='col-md-12 col-lg-6'>
            <div className={styles.leftBox}>
              <img
                src={promoProduct1.img}
                alt={promoProduct1.name}
                className={styles.imgPromo}
              />
              <div className={styles.shadeBox}></div>
              <p className={styles.guestRoomTxt}>guest room</p>
              <p className={styles.categoryTxt}>{promoProduct1.category}</p>
              <div className={styles.saleBox}>
                <span className={styles.saleAmount}>-20%</span>
              </div>
            </div>
          </div>

          {/* Pictures on the right */}
          <div className='col-md-12 col-lg-6'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.upperRightBox}>
                  <img
                    src={promoProduct2.img}
                    alt={promoProduct2.name}
                    className={styles.imgPromoLeft}
                  />
                  <p className={styles.productTxt}>
                    <span className={styles.bold}>office</span>
                    {promoProduct2.category}
                  </p>
                  <p className={styles.collectionTxt}>collection</p>
                  <p className={styles.amountTxt}>$200.00</p>
                  <img
                    src={promoProduct3.img}
                    alt={promoProduct3.name}
                    className={styles.imgPromoRight}
                  />
                </div>
              </div>
              <div className='col-12'>
                <div className={styles.lowerRightBox}>
                  <img
                    src={promoProduct4.img}
                    alt={promoProduct4.name}
                    className={styles.imgPromoRightDown}
                  />
                  <p className={styles.special}>
                    <span className={styles.bold}>special</span>collection
                  </p>
                  <p className={styles.saleTxt}>save up to 45% on furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promo.propTypes = {
  products: PropTypes.array.isRequired,
  promoProduct1: PropTypes.object.isRequired,
  promoProduct2: PropTypes.object.isRequired,
  promoProduct3: PropTypes.object.isRequired,
  promoProduct4: PropTypes.object.isRequired,
};

export default Promo;
