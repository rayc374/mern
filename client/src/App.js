import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeComponent from './components/home-component';
import RegisterComponent from './components/register-component';
import LoginComponent from './components/Login-component';
import ProfileComponent from './components/profile-component';
import AuthService from './services/auth.service';
import CourseComponent from './components/course-component';
import PostCourseComponent from './components/postCourse-component';
import EnrollComponent from './components/enroll-component';
import Apply from './components/Apply';
//import './App.css';
import Navbarmenu from './components/Navbarmenu';
import Directions from './pages/directions';
function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      fetch('http://localhost:8080/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <BrowserRouter>
      <Navbarmenu user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        >
          <Route index element={<HomeComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginComponent />}
          />
          <Route
            path="/apply"
            element={user ? <Apply /> : <Navigate to="/login" />}
          />
          <Route
            path="profile"
            element={
              <ProfileComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="course"
            element={
              <CourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="postCourse"
            element={
              <PostCourseComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="enroll"
            element={
              <EnrollComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Route>
        <Route path="directions" element={<Directions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
