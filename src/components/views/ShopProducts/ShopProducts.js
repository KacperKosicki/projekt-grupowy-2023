import React, { useState, useEffect } from 'react';
import styles from './ShopProducts.module.scss';
import Swipeable from '../../features/Swipeable/Swipeable';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
const ShopProducts = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [pagesCount, setPagesCount] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [transition, setTransition] = useState(false);

  const products = useSelector(state => getAll(state));
  const productsPerPage = 12;
  const isFeatured = false;

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId === 'furniture') {
      setCategoryProducts(products);

      const pageCount = Math.ceil(products.length / productsPerPage);
      setPagesCount(pageCount);
    } else {
      setActiveCategory(categoryId);
      const filteredProducts = products.filter(
        item => item.category === activeCategory
      );
      setCategoryProducts(filteredProducts);
      const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
      setPagesCount(pageCount);
    }
  }, [activeCategory, products, productsPerPage, categoryId]);

  const swipeLeft = () => {
    if (activePage === pagesCount - 1) return;
    handlePageChange(activePage + 1);
  };

  const swipeRight = () => {
    if (activePage === 0) return;
    handlePageChange(activePage - 1);
  };

  const handlePageChange = newPage => {
    setTransition(true);
    setTimeout(() => {
      setActivePage(newPage);
      setTransition(false);
    }, 500);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Swipeable leftAction={swipeLeft} rightAction={swipeRight}>
          <div className={clsx(styles.galleryImg, transition ? styles.hidden : '')}>
            <div className='row'>
              {categoryProducts
                .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
                .map(item => (
                  <div key={item.id} className='col-6 col-md-4 col-lg-4"'>
                    <ProductBox {...item} isFeatured={isFeatured} />
                  </div>
                ))}
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default ShopProducts;
