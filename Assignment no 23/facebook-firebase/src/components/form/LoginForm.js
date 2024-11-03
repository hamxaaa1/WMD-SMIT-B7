import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { useState } from 'react'
import { login } from '../../store/slices/authSlice';
import './LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      );
      setErrors({});
      return true;
    } catch (err) {
      const newError = {};
      err.inner.forEach((error) => {
        newError[error.path] = error.message;
      });
      setErrors(newError);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (!isValid) {
      return;
    }

    const user = {
      email,
      password,
    }
    dispatch(login(user))

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h3 className="login-title">Login</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <button type="submit" className="submit-button">Login</button>
      </form>
      <div className="signup-prompt">
        <p>If you don't have an account, <a href="/signup" className="signup-link">sign up here</a>.</p>
      </div>
    </>
  )
}

export default LoginForm