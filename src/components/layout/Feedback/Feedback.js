import React from 'react';

import styles from './Feedback.module.scss';

const Feedback = () => {


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
          <div>
            <p>"</p>
          </div>
          <div>
            <p>Tekst</p>
          </div>
          <div className={'row ' + styles.author}>
            <div className='col-6 '>IMG</div>
            <div className='col-6 '>
              <p>Name</p>
              <p>Clientttt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Feedback;
