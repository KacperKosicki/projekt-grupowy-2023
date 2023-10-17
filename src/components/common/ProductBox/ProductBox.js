import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import {
  toggleProductFavorite,
  toggleToCompare,
  getComparedProducts,
} from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  promo,
  isFavorite,
  id,
  stars,
  userStars,
  img,
  isFeatured,
  comparison,
  oldPrice,
}) => {
  const rootClassName = isFeatured ? styles.featuredRoot : styles.root;

  const dispatch = useDispatch();

  const toggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
  };

  const comparedProducts = useSelector(getComparedProducts);

  const handleToggleToCompare = e => {
    e.preventDefault();

    if (comparedProducts.length < 4 || comparison === true) {
      dispatch(toggleToCompare(id));
    }
  };

  return (
    <div className={rootClassName}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img className={styles.img} src={img} alt={name} />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        {isFeatured && (
          <div className={styles.counter}>
            <div className={styles.counterItem}>
              <span>25</span>
              <p>DAYS</p>
            </div>
            <div className={styles.counterItem}>
              <span>10</span>
              <p>HRS</p>
            </div>
            <div className={styles.counterItem}>
              <span>45</span>
              <p>MINS</p>
            </div>
            <div className={styles.counterItem}>
              <span>30</span>
              <p>SECS</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {isFeatured && (
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>Check</FontAwesomeIcon>
            </Button>
          )}
          <Button
            variant='outline'
            onClick={toggleFavorite}
            className={clsx(isFavorite && styles.icon_selected)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={handleToggleToCompare}
            className={clsx(comparison && styles.icon_selected)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
      <CompareStickyBar />
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  comparison: PropTypes.bool,
  isFavorite: PropTypes.bool,
  userStars: PropTypes.number,
  isFeatured: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default ProductBox;
