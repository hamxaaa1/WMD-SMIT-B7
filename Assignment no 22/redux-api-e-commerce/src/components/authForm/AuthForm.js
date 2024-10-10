import React, { useState } from 'react';
import styles from './AuthForm.module.css';
import * as Yup from 'yup';
import Navbar from '../navbar/Navbar';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [errors1, setErrors1] = useState({});
  const [errors2, setErrors2] = useState({});

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\d+$/, 'Password must be numeric')
      .required('Password is required'),
  });

  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\d+$/, 'Password must be numeric')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .matches(/^\d+$/, 'Password must be numeric')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const validate = async () => {
    try {
      await loginSchema.validate({
        email: loginEmail,
        password: loginPassword
      }, { abortEarly: false });
      return true;
    } catch (error) {
      const validationError = {};
      if (error.inner) {
        error.inner.forEach(err => {
          validationError[err.path] = err.message;
        });
      }
      setErrors1(validationError);
      return false;
    }
  };

  const signupValidate = async () => {
    try {
      await signupSchema.validate({
        email: signupEmail,
        password: signupPassword,
        confirmPassword: signupConfirmPassword
      }, { abortEarly: false });
      return true;
    } catch (error) {
      const validationError = {};
      if (error.inner) {
        error.inner.forEach(err => {
          validationError[err.path] = err.message;
        });
      }
      setErrors2(validationError);
      return false;
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (!isValid) return;

    const loginObj = { email: loginEmail, password: loginPassword };
    console.log(loginObj);

    setLoginEmail('');
    setLoginPassword('');
    setErrors1({});
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const isValid = await signupValidate();
    if (!isValid) return;

    const signupObj = { email: signupEmail, password: signupPassword, confirmPassword: signupConfirmPassword };
    console.log(signupObj);

    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
    setErrors2({});
  };

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formToggle}>
            <button onClick={() => setIsLogin(true)} className={isLogin ? styles.active : ""}>Login</button>
            <button onClick={() => setIsLogin(false)} className={!isLogin ? styles.active : ""}>Sign Up</button>
          </div>
          {isLogin ? (
            <form onSubmit={handleLoginSubmit} className={styles.form}>
              <h2>Login Form</h2>
              <input type='text' placeholder='Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              {errors1.email && <span>{errors1.email}</span>}
              <input type='password' placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              {errors1.password && <span>{errors1.password}</span>}
              <a href='#'>Forgot Password?</a>
              <button type='submit' style={{ marginBottom: 15 }}>Login</button>
              <p>Not a member? <a style={{ color: '#007BFF', cursor: "pointer" }} onClick={() => setIsLogin(false)}>Signup now</a></p>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className={styles.form}>
              <h2>Signup Form</h2>
              <input type='text' placeholder='Email' value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
              {errors2.email && <span>{errors2.email}</span>}
              <input type='password' placeholder='Password' value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
              {errors2.password && <span>{errors2.password}</span>}
              <input type='password' placeholder='Confirm Password' value={signupConfirmPassword} onChange={(e) => setSignupConfirmPassword(e.target.value)} />
              {errors2.confirmPassword && <span>{errors2.confirmPassword}</span>}
              <button  style={{marginTop: 30}} type='submit'>Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default AuthForm;
