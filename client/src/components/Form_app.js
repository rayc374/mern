import React, { useState, useEffect } from 'react';
import './form.css';
import axios from 'axios';
import AuthService from '../services/auth.service';
const API_URL = 'http://localhost:8080';
const Form_app = () => {
  const [formData, setFormData] = useState({
    name: '',
    choosedate: '',
    contact: '',
    contactnumber: '',
    rentam: '',
    rentpm: '',
    venue: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //發送表單數據到後端
    fetch('/api/form/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .post(`${API_URL}/api/form/submit-form`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        //成功提交時 導向首頁或其他頁
      })
      .catch((err) => {
        console.log(formData);
        console.log('表單提交失敗', err);
        alert('表單提交失敗', err);

        //顯示錯誤訊息
      });
  };
  return (
    <div className="applyFrm">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">申請</h1>

        <div className="inputContainer">
          <input
            onChange={handleInputChange}
            type="text"
            className="input"
            placeholder="a"
            required
            name="name"
            value={formData.name}
          />
          <label htmlFor="name" className="label">
            公司或單位名稱
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="date"
            className="input"
            placeholder="a"
            required
            name="choosedate"
            onChange={handleInputChange}
            value={formData.choosedate}
          />
          <label htmlFor="choosedate" className="label">
            選擇日期
          </label>
        </div>
        <div className="inputContainer">
          <select
            className="input"
            name="venue"
            onChange={handleInputChange}
            value={formData.venue}
          >
            <option>請選擇租借場地</option>
            <option value="市民講堂">3樓市民講堂</option>
            <option value="城東藝廊">3樓城東藝廊</option>
            <option value="親子共讀區">2樓親子共讀區</option>
            <option value="樂學教室">1樓樂學教室</option>
            <option value="梯廳">1樓梯廳</option>
            <option value="廣場">戶外廣場</option>
          </select>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="input"
            placeholder="a"
            name="contact"
            onChange={handleInputChange}
            value={formData.contact}
          />
          <label htmlFor="contact" className="label">
            聯絡人
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="text"
            className="input"
            placeholder="a"
            name="contactnumber"
            onChange={handleInputChange}
            value={formData.contactnumber}
          />
          <label htmlFor="contactnumber" className="label">
            聯絡電話
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="checkbox"
            className=""
            name="rentam"
            onChange={handleInputChange}
            checked={formData.rentam}
          />
          <label htmlFor="rentam" className="label">
            租借上午
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            className=""
            name="rentpm"
            onChange={handleInputChange}
            checked={formData.rentpm}
          />
          <label htmlFor="rentpm" className="label">
            租借下午
          </label>
        </div>

        <button type="submit" className="submitBtn">
          提交
        </button>
      </form>
    </div>
  );
};

export default Form_app;
