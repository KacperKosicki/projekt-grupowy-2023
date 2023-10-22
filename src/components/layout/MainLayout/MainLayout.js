import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import { getScreenMode } from '../../../redux/screenModeRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editMode } from '../../../redux/screenModeRedux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const screenMode = useSelector(getScreenMode);
  let actualScreenMode = screenMode;

  function displayWindowSize() {
    let w = document.documentElement.clientWidth;

    if (w < 768) {
      actualScreenMode = 'mobile';
    } else if (w >= 768 && w < 992) {
      actualScreenMode = 'tablet';
    } else if (w >= 992) {
      actualScreenMode = 'desktop';
    }
  }

  window.addEventListener('resize', displayWindowSize);
  displayWindowSize();

  useEffect(() => {
    dispatch(editMode(actualScreenMode));
  }, [actualScreenMode, dispatch]);

  return (
    <div>
      <Header />
      {children}
      <CompareStickyBar />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
