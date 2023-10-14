import React from 'react';
import styles from './RegisterPage.module.scss';
import RegisterForm from '../../features/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className={styles.root}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
