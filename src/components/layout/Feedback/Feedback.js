import React from 'react';
import styles from './Feedback.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedbackList = useSelector(state => getAll(state));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a>page</a>
                </li>
                <li>
                  <a>page</a>
                </li>
                <li>
                  <a>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <div className={styles.content}>
            <p>{feedbackList[0].content}</p>
          </div>
          <div className={styles.author}>
            <div className={styles.picture}>
              <img
                key={feedbackList[0].id}
                className={styles.brandImg}
                src={feedbackList[0].img}
                alt={feedbackList[0].name}
              />
            </div>
            <div className={styles.name}>
              <p className={styles.authorName}>{feedbackList[0].name}</p>
              <p>{feedbackList[0].category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
