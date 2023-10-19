import React from 'react';
import styles from './Feedback.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../features/Swipeable/Swipeable';
import { useState } from 'react';
import clsx from 'clsx';

const Feedback = () => {
  const feedbackList = useSelector(state => getAll(state));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const swipeLeft = () => {
    if (currentIndex === feedbackList.length - 1) return;
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % feedbackList.length);
      setTransition(false);
    }, 500);
  };

  const swipeRight = () => {
    if (currentIndex === 0) return;
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + feedbackList.length) % feedbackList.length);
      setTransition(false);
    }, 500);
  };

  const currentFeedback = feedbackList[currentIndex];

  const dots = [];
  for (let i = 0; i < feedbackList.length; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => setCurrentIndex(i)}
          className={i === currentIndex ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <Swipeable leftAction={swipeLeft} rightAction={swipeRight}>
          <div className={clsx(styles.galleryImg, transition ? styles.hidden : '')}>
            <div className={styles.feedback}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className={styles.content}>
                <p>{currentFeedback.content}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.picture}>
                  <img
                    key={currentFeedback.id}
                    className={styles.brandImg}
                    src={currentFeedback.img}
                    alt={currentFeedback.name}
                  />
                </div>
                <div className={styles.name}>
                  <p className={styles.authorName}>{currentFeedback.name}</p>
                  <p>{currentFeedback.category}</p>
                </div>
              </div>
            </div>
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default Feedback;
