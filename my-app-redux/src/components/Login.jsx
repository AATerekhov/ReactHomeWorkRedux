import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByEmail } from '../features/usersSlice';
import { useNavigate } from 'react-router-dom';
import './Registration-card.css'

const Login = (() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();   

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Вход:', { email, password });
    
    dispatch(getByEmail({ email, password }));
    navigate('/');
  };

  return (    
    <div className="login">
      <h1>Вход</h1>
      <div className="registration-card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Электронная почта:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>    
  );
});

export default Login;