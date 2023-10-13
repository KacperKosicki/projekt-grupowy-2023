import React, { useState } from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Blog = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>page 1</a>
                  <a>page 2</a>
                  <a>page 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className={styles.post_column + ' col-md-4'}>
            <div className={styles.background}>
              <div className={styles.post}>
                <div className={styles.header}>
                  <div className='row d-flex justify-content-between'>
                    <div className='col-6 p-3'>
                      <FontAwesomeIcon icon={faEye}>Check</FontAwesomeIcon>
                      <span className='px-2'>12.11.2023</span>
                    </div>
                    <div className='col-6 p-3'>
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      <span className='px-2'>4 Comments</span>
                    </div>
                  </div>
                </div>
                <h4 className={isButtonHovered ? styles.hover : ''}>
                  Product That Flight Static
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nunc
                  in ipsum rutrum tincidunt in ac libero. Sed non nunc in ipsum rutrum
                  tincidunt in ac libero. Sed non nunc in ipsum rutrum tincidunt in ac
                  libero.
                </p>
                <div className='text-center'>
                  <Button
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                    variant='white'
                    className={'mx-auto ' + styles.button}
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
