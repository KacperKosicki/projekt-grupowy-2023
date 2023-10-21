import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import {
  getComparedProducts,
  removeFromComparison,
  initializeProducts,
} from '../../../redux/productsRedux';

import styles from './CompareStickyBar.module.scss';

const CompareStickyBar = () => {
  const comparedProducts = useSelector(getComparedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  const handleRemoveFromComparison = id => {
    dispatch(removeFromComparison(id));
  };

  return (
    <div className={styles.compareStickyBar}>
      {comparedProducts.map(product => (
        <div key={product.id} className={styles.product}>
          <img
            src={product.img}
            alt={product.name}
            onClick={() => handleRemoveFromComparison(product.id)}
          />
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
        </div>
      ))}
      <Button variant='small' disabled={comparedProducts.length === 0}>
        <FontAwesomeIcon icon={faExchangeAlt} />
        Compare
      </Button>
    </div>
  );
};

export default CompareStickyBar;
