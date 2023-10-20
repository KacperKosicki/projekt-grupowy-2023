import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CardTitle, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.email.includes('@')) {
      validationErrors.email = 'Nieprawidłowy adres email!';
    }
    if (formData.password.length < 3) {
      validationErrors.password = 'Hasło musi mieć przynajmniej 3 znaki!';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Tutaj można dodać logikę rejestracji, np. wysyłkę danych na serwer.
      // FormData zawiera poprawne dane wprowadzone przez użytkownika.
      console.log('Formularz jest poprawny. Dane do rejestracji:', formData);
      // Tutaj możesz przekierować użytkownika do innej strony, na przykład strony głównej.
      history.push('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group controlId='email' className='my-3'>
            <CardTitle className={styles.marginText}>Email</CardTitle>
            <Form.Control
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </Form.Group>

          <Form.Group controlId='password' className='my-3'>
            <CardTitle className={styles.marginText}>Hasło</CardTitle>
            <Form.Control
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </Form.Group>
          <span>
            Nie pamiętasz hasła?{' '}
            <NavLink to='#' className={styles.remindPassword}>
              Przypomnij hasło.
            </NavLink>
          </span>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Button className={styles.loginButton} variant='primary' type='submit'>
                Zaloguj się
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
