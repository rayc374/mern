import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import logo from '../image/logo.png';
import './Navbarmenu.css';
// import logo from '../../img/logo.png';
//------------------------------------------------------

const Navbarmenu = ({ user }) => {
  //------------------------------------------------------------
  const Logout = () => {
    window.alert('已登出。');
    window.open('http://localhost:8080/auth/logout', '_self');
    // setCurrentUser(null);
  };
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }
  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              {/* <img src={logo} alt="logo" /> */}
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: 'none' }}
                    onClick={toggleClass}
                  >
                    {' '}
                    <FiXCircle />{' '}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: 'none' }}
                    onClick={toggleClass}
                  >
                    {' '}
                    <FiAlignRight />{' '}
                  </span>
                </>
              )}
              <ul className={boxClass.join(' ')}>
                <li className="menu-item">
                  <Link
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    <img src={logo} width={'50px'}></img> 首頁{' '}
                  </Link>
                </li>
                <li className="menu-item sub__menus__arrows">
                  <Link onClick={toggleClass} activeClassName="is-active">
                    {' '}
                    本館資訊 <FiChevronDown />{' '}
                  </Link>{' '}
                  <ul className={boxClassSubMenu.join(' ')}>
                    <li>
                      {''}
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                        開館資訊{' '}
                      </Link>
                    </li>
                    <li>
                      {''}
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                        樓層介紹{' '}
                      </Link>
                    </li>
                    <li>
                      {''}
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/directions`}
                      >
                        場地說明{' '}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {' '}
                  <Link>
                    {' '}
                    線上申請 <FiChevronDown />{' '}
                  </Link>
                  <ul className={boxClassSubMenu.join(' ')}>
                    <li>
                      {' '}
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Apply`}
                      >
                        {' '}
                        網路辦證{' '}
                      </Link>{' '}
                    </li>

                    <li>
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Offline`}
                      >
                        {' '}
                        活動報名{' '}
                      </Link>{' '}
                    </li>
                    <li>
                      <Link
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/apply`}
                      >
                        {''}
                        場地租借{''}
                      </Link>
                      {''}
                    </li>
                  </ul>
                </li>
                {user ? (
                  <ul>
                    <img src={user.photos[0].value} alt="" className="avatar" />
                    <li className="listItem">{user.displayName}</li>
                    <li className="menu-item">
                      <Link onClick={Logout} to={'/'}>
                        登出
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <li className="menu-item">
                    <Link activeClassName="is-active" to="/login">
                      登入
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbarmenu;
