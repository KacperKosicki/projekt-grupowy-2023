import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Reviews.module.scss';
import Form from 'react-bootstrap/Form';
import Stars from '../../common/Stars/Stars';
import Button from '../../common/Button/Button';
import clsx from 'clsx';

const Reviews = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.reviews_outercontainer}>
            <div className={styles.tab_containder}>
              <button className={styles.tab_button}>DESCRIPTION</button>
              <button className={clsx(styles.tab_button, styles.active)}>
                REVIEWS(0)
              </button>
              <button className={styles.tab_button}>SPECIFICATION</button>
              <button className={styles.tab_button}>CUSTOM TAB</button>
            </div>
            <div className={styles.reviews_innercontainer}>
              <div className={styles.review_field}>
                <p className='py-4'>There are no reviews for this product.</p>
                <button className={styles.review_button}>Add a review</button>
              </div>
              <div>
                <p>Your rating</p>
                <div className='d-flex align-items-center mb-5'>
                  <span className='me-4'>Bad</span>
                  <Stars userStars={5} />
                  <span className='ms-4'>Good</span>
                </div>
              </div>
              <Form>
                <Form.Group controlId='review' className='mb-3'>
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control as='textarea' rows='10' type='text' />
                </Form.Group>
                <div className='row mb-3'>
                  <div className='col'>
                    <Form.Group controlId='name'>
                      <Form.Control
                        className={styles.text_field}
                        type='text'
                        placeholder='Name*'
                      />
                    </Form.Group>
                  </div>
                  <div className='col'>
                    <Form.Group controlId='email'>
                      <Form.Control
                        className={styles.text_field}
                        type='text'
                        placeholder='Email*'
                      />
                    </Form.Group>
                  </div>
                  <div className={styles.button_container + ' col-auto'}>
                    <Button variant='white' className={styles.button}>
                      CONTINUE
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
