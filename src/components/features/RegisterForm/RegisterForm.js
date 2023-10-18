import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const history = useHistory();
  const [hasAccount, setHasAccount] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    acceptTerms: false,
    receiveNewsletter: false,
    selectAll: false,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
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
    const validationErrors = {};
    if (formData.firstName.length < 3 || formData.firstName.length > 30) {
      validationErrors.firstName = 'Imię musi mieć od 3 do 30 znaków!';
    }
    if (formData.lastName.length < 3 || formData.lastName.length > 30) {
      validationErrors.lastName = 'Nazwisko musi mieć od 3 do 30 znaków!';
    }
    if (!formData.email.includes('@')) {
      validationErrors.email = 'Nieprawidłowy adres email!';
    }
    if (formData.password.length < 3) {
      validationErrors.password = 'Hasło musi mieć przynajmniej 3 znaki!';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword =
        'Hasło i potwierdzenie hasła muszą być identyczne!';
    }
    if (!checkboxes.acceptTerms) {
      validationErrors.acceptTerms = 'Musisz zaakceptować warunki regulaminu!';
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

          <Form.Group controlId='firstName' className='my-3'>
            <Form.Control
              placeholder='Imię *'
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <span className={styles.error}>{errors.firstName}</span>
            )}
          </Form.Group>

          <Form.Group controlId='lastName' className='my-3'>
            <Form.Control
              placeholder='Nazwisko *'
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </Form.Group>

          <Form.Group controlId='email' className='my-3'>
            <Form.Control
              placeholder='E-mail *'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </Form.Group>

          <Form.Group controlId='password' className='my-3'>
            <Form.Control
              placeholder='Hasło *'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
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
            {errors.confirmPassword && (
              <span className={styles.error}>{errors.confirmPassword}</span>
            )}
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
              label={
                <span>
                  Akceptuję warunki <span className={styles.regulamin}>regulaminu</span>{' '}
                  *
                </span>
              }
              name='acceptTerms'
              checked={checkboxes.acceptTerms}
              onChange={handleCheckboxChange}
            />
            {errors.acceptTerms && (
              <span className={styles.error}>{errors.acceptTerms}</span>
            )}

            <Form.Check
              type='checkbox'
              label='Tak, tak! Chcę otrzymywać JEŻowy newsletter'
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
              <Button variant='primary' type='submit'>
                Zarejestruj się
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
