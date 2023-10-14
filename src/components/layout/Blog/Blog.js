import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComments } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Blog = () => {
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
          {Array.from({ length: 3 }, (_, postNr) => (
            <div key={postNr} className={styles.post_column + ' col-md-4'}>
              <div className={styles.background}></div>
              <div className={styles.post}>
                <div className={styles.header}>
                  <div className='row d-flex justify-content-between'>
                    <div className='col-6 p-3'>
                      <FontAwesomeIcon
                        className='px-3'
                        icon={faCalendarDay}
                      ></FontAwesomeIcon>
                      <span className='px-2'>12.11.2023</span>
                    </div>
                    <div className='col-6 p-3'>
                      <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                      <span className='px-2'>4 Comments</span>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h4 className={postNr === 0 ? styles.active : ''}>
                    Product That Flight Static
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                    nunc in ipsum rutrum tincidunt in ac libero. Sed non nunc in ipsum
                    rutrum tincidunt in ac libero.
                  </p>
                  <div className='text-center pt-2'>
                    <Button
                      variant='white'
                      className={
                        postNr === 0
                          ? styles.button + ' ' + styles.active
                          : styles.button
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
