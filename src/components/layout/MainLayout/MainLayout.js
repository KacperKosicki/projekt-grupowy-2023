import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareStickyBar from '../CompareStickyBar/CompareStickyBar';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <CompareStickyBar />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
