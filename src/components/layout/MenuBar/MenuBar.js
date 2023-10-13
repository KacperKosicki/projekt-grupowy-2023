import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row flex-lg-reverse flex-xl-row-reverse'>
        <div className={'col ' + styles.menu}>
          <Navbar expand='md' className='bg-body-tertiary p-0'>
            <Container className='px-0'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav' className='p-0'>
                <Nav className='me-auto'>
                  <Nav.Link
                    href='#home'
                    className={`px-4 ${styles.active} ${styles.nav}`}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link href='#' className={'px-4 ' + styles.nav}>
                    Furniture
                  </Nav.Link>
                  <Nav.Link href='#' className={'px-4 ' + styles.nav}>
                    Chair
                  </Nav.Link>
                  <Nav.Link href='#' className={'px-4 ' + styles.nav}>
                    Table
                  </Nav.Link>
                  <Nav.Link href='#' className={'px-4 ' + styles.nav}>
                    Bedroom
                  </Nav.Link>
                  <Nav.Link href='#' className={'px-4 ' + styles.nav}>
                    Blog
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className='col d-flex align-items-center'>
          <ProductSearch />
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
