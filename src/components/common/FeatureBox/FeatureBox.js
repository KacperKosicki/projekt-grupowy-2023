import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ icon, children }) => (
  <div className={styles.root}>
    {icon && (
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
