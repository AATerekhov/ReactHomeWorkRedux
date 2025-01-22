import React, { useState } from 'react';
import '../Registration-card.css'
import { addUser, getByEmail } from '../../features/usersSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const registerWithLogin = ((props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(props.title, (name !== null)?{ name, email, password }:{ email, password }); 
      
      if (props.isLogin){        
        dispatch(getByEmail({ email, password }));
        navigate('/home');  
      } else {
        dispatch(addUser({ name, email, password }));
        navigate('/login');
      }
  };

  return (
    <div className="register" >      
      <h1>{props.title}</h1>
      <div className='registration-card'>
        <form onSubmit={handleSubmit}>
          {(!props.isLogin) && <div>
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>}
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
          <button type="submit">{props.buttonTitle}</button>
        </form>
      </div>      
    </div>
  );
});

export default registerWithLogin;