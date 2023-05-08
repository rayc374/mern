import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Google from '../image/google-logo.svg';
const LoginComponent = ({ currentUser, setCurrentUser }) => {
  const nagivate = useNavigate();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [message, setMessage] = useState('');
  const google = () => {
    window.open('http://localhost:8080/auth/google', '_self');
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem('user', JSON.stringify(response.data));
      window.alert('登入成功。您現在將被重新導向到個人資料頁面。');
      setCurrentUser(AuthService.getCurrentUser());
      nagivate('/profile');
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  return (
    <div style={{ padding: '3rem' }} className="col-md-12">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div className="login">
          <div>
            <h1 className="loginTitle">選擇一個登入方式</h1>
            <div className="wrapper">
              <div className="loginButton" onClick={google}>
                <img src={Google} alt="" className="icon" />
                Google
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="form-group"></div>
      </div>
    </div>
  );
};

export default LoginComponent;
