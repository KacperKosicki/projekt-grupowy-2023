import React from 'react';
import styles from './ProductDetails.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Stars from '../../common/Stars/Stars';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const ProductDetails = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.productContainer}>
          <div className='col-5 '>
            <div className={'row ' + styles.productGalery}>
              <div className='col-12'>
                <div className={styles.productImage}></div>
              </div>
              <div className='col-12'>
                <div className={styles.gallery}>
                  <div>
                    <div className={styles.ImageGallery}>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                    </div>
                  </div>
                  <div className={styles.arrowsContainer}>
                    <div className={styles.arrows}>
                      <Button variant='outlineLight'>
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineLight'>
                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-7 ' + styles.productDescription}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Sunbaby Magic Bear Chair</h3>
              <div className={styles.arrowsContainer}>
                <Button variant='outlineLight' className={styles.arrow}>
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </Button>
                <Button variant='outlineLight' className={styles.arrow}>
                  <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.reviewContainer}>
              <Stars stars={2} userStars={0} />
              <p>(0 Reviews)</p>
              <p>|</p>
              <p>Add Your Review</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.pricesContainer}>
              <div className={styles.oldPrice}>$ 350.00</div>
              <div className={styles.price}>
                <Button noHover variant='small' className={styles.price}>
                  $ 250.00
                </Button>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.actionsContainer}>
              <div className={styles.actions}>
                <Button variant='outlineLight'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button variant='outlineLight'>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <Button variant='outlineLight'>
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <Button variant='outlineLight'>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.quantity}>
                <p>Quantity:</p>
                <Button variant='outlineLight' noHover='not' className={styles.number}>
                  2
                </Button>
                <Button
                  variant='outlineLight'
                  noHover='not'
                  className={styles.changeNumber}
                >
                  -
                </Button>
                <Button
                  variant='outlineLight'
                  noHover='not'
                  className={styles.changeNumber}
                >
                  +
                </Button>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.overviewContainer}>
              <h4>Quick Overview</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus
                fringilla libero, eu ultricies est tempus et.
              </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.detailsContainer}>
              <div className={styles.availability}>
                <p className={styles.title}>Availability: </p>
                <p className={styles.value}>In Stock</p>
              </div>
              <div className={styles.availability}>
                <p className={styles.title}>Category: </p>
                <p className={styles.value}>Furniture</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.socialMediaContainer}>
              <Button variant='outline' noHover='not' className={styles.facebook}>
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Share
              </Button>
              <Button variant='outlineLight' noHover='not'>
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  className={styles.google}
                ></FontAwesomeIcon>{' '}
                Google+
              </Button>
              <Button variant='outlineLight' noHover='not'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.twitter}
                ></FontAwesomeIcon>{' '}
                Tweet
              </Button>
              <Button variant='outlineLight' noHover='not'>
                <FontAwesomeIcon
                  icon={faPinterestP}
                  className={styles.pinterest}
                ></FontAwesomeIcon>{' '}
                Pinterest
              </Button>
              <Button variant='outlineLight' noHover='not'>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.linkedin}
                ></FontAwesomeIcon>{' '}
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
