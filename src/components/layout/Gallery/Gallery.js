import React from 'react';
import styles from './Gallery.module.scss';
import { Button } from 'bootstrap';

const Gallery = () => {
  return (
    <section>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.gallery}>
            <div className={styles.leftSideBar}>
              <h3>Furniture Gallery</h3>
              <div className={styles.leftSideButtons}>
                <Button variant='small' className={styles.button}>
                  Featured
                </Button>
                <Button variant='small' className={styles.button}>
                  Top Seller
                </Button>
                <Button variant='small' className={styles.button}>
                  Sale Off
                </Button>
                <Button variant='small' className={styles.button}>
                  Top Rated
                </Button>
              </div>
              <div className={styles.leftSideImage}></div>
              <div className={styles.productDescription}>
                <h4>Products name</h4>
                <div className={styles.ratingStars}>Products rating</div>
              </div>
              <div className={styles.prices}>
                <div className={styles.newPrice}>$120</div>
                <div className={styles.oldPrice}>$160</div>
              </div>
            </div>

            <div className={styles.gallerySlider}></div>

            <div className={styles.rightSideBar}>
              <div className={styles.rightSideImage}></div>
              <div className={styles.currentPrice}>
                <p>from</p>
                <h2>$50.80</h2>
              </div>
              <div className={styles.productDescription}>
                <h2>Products name</h2>
              </div>
              <Button>Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
