import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userStars,
  isFavorite,
  id,
  img,
  comparison,
}) => {
  const dispatch = useDispatch();

  const toggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
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
        <Stars stars={stars} userStars={userStars} id={id} />
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
  userStars: PropTypes.number,
};

export default ProductBox;
