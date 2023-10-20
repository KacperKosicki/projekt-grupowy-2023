import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from '../../features/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
