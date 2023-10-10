import styles from './Brands.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAll } from '../../../redux/brandsRedux';

const Brands = () => {
  const [firstImg, setFirstImg] = useState(0);
  const [lastImg, setLastImg] = useState(6);

  const brands = useSelector(state => getAll(state));
  const handleBack = () => {
    if (firstImg > 0) {
      setFirstImg(firstImg - 1);
      setLastImg(lastImg - 1);
    } else return;
  };

  const handleForward = () => {
    if (lastImg < brands.length) {
      setLastImg(lastImg + 1);
      setFirstImg(firstImg + 1);
    } else return;
  };

  const elementsToDisplay = brands.slice(firstImg, lastImg);

  return (
    <div className={styles.root}>
      <div className='container'>
        <hr className={styles.sectionDivider} />
        <div className={styles.slider}>
          <button className={styles.sliderButton} onClick={handleBack}>
            {' '}
            {'<'}{' '}
          </button>
          {elementsToDisplay.map(brand => (
            <div key={brand.id} className={styles.imgContainer}>
              <img
                key={brand.id}
                className={styles.brandImg}
                src={brand.img}
                alt={brand.name}
              />
            </div>
          ))}
          <button className={styles.sliderButton} onClick={handleForward}>
            {'>'}
          </button>
        </div>
        <hr className={styles.sectionDivider} />
      </div>
    </div>
  );
};

Brands.propTypes = {
  firstImg: PropTypes.number,
  lastImg: PropTypes.number,
  brands: PropTypes.array,
};

export default Brands;
