import React from 'react';
import styles from './SearchPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const SearchPage = () => {
  return (
    <div className={styles.root}>
      <NewFurniture productsPerPage={8} />
    </div>
  );
};

export default SearchPage;
