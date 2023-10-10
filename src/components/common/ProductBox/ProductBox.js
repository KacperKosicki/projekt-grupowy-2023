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
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import {
  toggleProductFavorite,
  toggleToCompare,
  getComparedProducts,
} from '../../../redux/productsRedux';

const ProductBox = ({ name, price, promo, stars, img, isFavorite, comparison, id }) => {
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
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img className={styles.img} src={img} alt={name} />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={toggleFavorite}
            className={clsx(isFavorite && styles.icon_selected)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>

          <Button
            variant='outline'
            className={clsx(comparison && styles.icon_selected)}
            onClick={handleToggleToCompare}
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
};

export default ProductBox;
