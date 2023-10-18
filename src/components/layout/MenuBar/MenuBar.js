import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
                    as={NavLink}
                    to='/'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/shop/furniture'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
                    Furniture
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/shop/chair'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
                    Chair
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/shop/table'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
                    Table
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/shop/bedroom'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
                    Bedroom
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/blog'
                    className={'px-4 ' + styles.nav}
                    activeClassName={styles.active}
                  >
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
