import React from 'react';
import styles from './RegisterForm.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [checkboxes, setCheckboxes] = useState({
    acceptTerms: false,
    receiveNewsletter: false,
    selectAll: false,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSelectAll = () => {
    setCheckboxes({
      ...checkboxes,
      acceptTerms: !checkboxes.selectAll,
      receiveNewsletter: !checkboxes.selectAll,
      selectAll: !checkboxes.selectAll,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Tutaj możesz dodać logikę rejestracji, np. wysyłkę danych na serwer.
    // FormData i checkboxes zawierają aktualne dane wprowadzone przez użytkownika.
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group as={Row}>
            <Col sm='6' className={styles.radio}>
              <Form.Check
                type='radio'
                label='Mam konto'
                name='accountType'
                id='hasAccount'
                checked={hasAccount}
                onChange={() => setHasAccount(true)}
              />
            </Col>
            <Col sm='6' className={'d-flex justify-content-end ' + styles.radio}>
              <Form.Check
                type='radio'
                label='Nie mam konta'
                name='accountType'
                id='noAccount'
                checked={!hasAccount}
                onChange={() => setHasAccount(false)}
              />
            </Col>
          </Form.Group>

          <h6 className='mt-5 mb-1'>Podaj dane do rejestracji</h6>

          <Form.Group controlId='email' className='my-3'>
            <Form.Control
              placeholder='E-mail *'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Control
              placeholder='Hasło *'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='confirmPassword' className='my-3'>
            <Form.Control
              placeholder='Powtórz hasło *'
              type={showPassword ? 'text' : 'password'}
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <Row className='mt-3'>
              <Col sm='6'></Col>
              <Col sm='6' className='d-flex justify-content-end'>
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  label='Pokaż hasło'
                  className='password-toggle'
                  onClick={togglePasswordVisibility}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId='checkboxes' className={styles.checkboxes}>
            <Form.Check
              type='checkbox'
              label='Zaznacz wszystkie'
              name='selectAll'
              checked={checkboxes.selectAll}
              onChange={handleSelectAll}
              className='my-3 fw-semibold'
            />
            <Form.Check
              type='checkbox'
              label='Akceptuję warunki'
              name='acceptTerms'
              checked={checkboxes.acceptTerms}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type='checkbox'
              label='Chcę otrzymywać newsletter'
              name='receiveNewsletter'
              checked={checkboxes.receiveNewsletter}
              onChange={handleCheckboxChange}
              className='my-3'
            />
          </Form.Group>

          <Row>
            <Col sm='6' className='d-flex align-items-end'>
              <NavLink to='/'>&lt;Wróć</NavLink>
            </Col>
            <Col sm='6' className='d-flex justify-content-end'>
              <NavLink to='/'>
                <Button variant='primary' type='submit'>
                  Zapisz zmiany
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
