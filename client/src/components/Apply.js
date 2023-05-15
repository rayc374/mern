import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
const Apply = ({ user }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>申請</h1>
      <form style={{ textAlign: 'center' }}>
        <div style={{ margin: '0.5rem' }}>
          <label>活動性質：</label>
          <select>
            <option>請選擇</option>
            <option>會議</option>
            <option>課程講座</option>
            <option>展覽</option>
            <option>音樂/表演</option>
            <option>親子活動</option>
          </select>
        </div>
        <label>選擇申請的場地：</label>
        <select>
          <option value={0}>請選擇</option>
          <option>3F城東藝廊</option>
          <option>3F市民講堂</option>
          <option>2F親子共讀區</option>
          <option>1F樂學教室</option>
          <option>1F梯廳</option>
          <option>戶外廣場</option>
        </select>
        <div style={{ margin: '0.5rem' }}>
          <label>選擇日期：</label>
          <input type="date" />
        </div>
        <div style={{ margin: '0.5rem' }}>
          <label>選擇時段：</label>
          <input type="checkbox" id={'上午'} name={'上午'} value={'am'} />
          <label>上午</label>
          <input type="checkbox" id={'上午'} name={'上午'} value={'pm'} />
          <label>下午</label>
        </div>
        <div style={{ margin: '0.5rem' }}>
          <label>活動人數：</label>
          <select>
            <option>請選擇</option>
            <option>10人以下</option>
            <option>11~20人</option>
            <option>21~40人</option>
            <option>41~60人</option>
            <option>61~130人</option>
          </select>
        </div>
        <div>
          <label>備註：</label>
          <input type="text" placeholder="活動名稱或其他事項" />
        </div>
        <div style={{ margin: '0.5rem' }}>
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value={'送出申請'}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Apply;
