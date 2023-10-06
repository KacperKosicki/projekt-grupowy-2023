import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      {/*<select name='' id=''>
        <option value=''>Select a category</option>
        </select> */}
      <div className={styles.customSelect}>
        <span className={styles.selectCategory}>Select Category</span>
        <ul>
          <li className={styles.listCategory}>Bestsellers</li>
          <li className={styles.listCategory}>Brand new</li>
          <li className={styles.listCategory}>Sale</li>
          <li className={styles.listCategory}>Inspirations</li>
        </ul>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
