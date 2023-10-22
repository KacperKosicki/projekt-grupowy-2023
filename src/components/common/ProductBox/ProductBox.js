import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addProduct } from '../../../redux/cartRedux';
import Stars from '../Stars/Stars';
import { useState } from 'react';
import Popup from '../../views/Popup/Popup';
import {
  toggleProductFavorite,
  toggleToCompare,
  getComparedProducts,
} from '../../../redux/productsRedux';

const ProductBox = props => {
  const {
    name,
    price,
    promo,
    id,
    stars,
    userStars,
    img,
    isFeatured,
    comparison,
    category,
    oldPrice,
  } = props;

  const rootClassName = isFeatured ? styles.featuredRoot : styles.root;

  const [isFavorite, setIsFavorite] = useState(() => {
    const isFavoriteLocalStorage = localStorage.getItem(`isFavorite_${id}`);
    return isFavoriteLocalStorage === null
      ? props.isFavorite
      : isFavoriteLocalStorage === 'true';
  });

  const [show, setShow] = useState(false);

  const handleClosePopup = () => {
    setShow(false);
  };

  const handleShowPopup = e => {
    e.preventDefault();
    setShow(true);
  };

  const dispatch = useDispatch();

  const toggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
    setIsFavorite(prevIsFavorite => {
      const newIsFavorite = !prevIsFavorite;

      localStorage.setItem(`isFavorite_${id}`, newIsFavorite);

      return newIsFavorite;
    });
  };

  const [showAlert, setShowAlert] = useState(false);

  const addToCart = e => {
    e.preventDefault();
    dispatch(addProduct({ id, name, img, price }));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
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
      {showAlert && (
        <div className={`alert alert-success ${styles.alert}`} role='alert'>
          Produkt <span>{name}</span> został pomyślnie dodany do koszyka.
        </div>
      )}
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <Link to={`/product/${id}`}>
          <img className={styles.img} src={img} alt={name} />
        </Link>
        <div className={styles.buttons}>
          <Button variant='small' onClick={handleShowPopup}>
            Quick View
          </Button>
          <Button onClick={addToCart} variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
          <Popup
            show={show}
            handleClose={handleClosePopup}
            name={name}
            img={img}
            category={category}
            stars={stars}
            userStars={userStars}
            id={id}
            price={price}
            oldPrice={oldPrice}
            promo={promo}
          />
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
        <h5>
          <Link to={`/product/${id}`}>{name}</Link>
        </h5>
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
            className={clsx(comparison && styles.icon_comp, styles.compHover)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.prices}>
          {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
          <div className={styles.price}>
            <Button noHover variant='small'>
              $ {price}
            </Button>
          </div>
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
  isFeatured: PropTypes.bool,
  category: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
