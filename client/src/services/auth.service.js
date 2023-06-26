import axios from 'axios';
//const API_URL = 'http://localhost:8080/api/user';
const API_URL = 'http://localhost:3000/api';
const API_URL2 = 'http://localhost:8080/api';
class AuthService {
  submit(formData) {
    return axios.post(`${API_URL2}/form/submit-form`, formData);
  }

  login(email, password) {
    return axios.post(API_URL + '/login', { email, password });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(username, email, password, role) {
    return axios.post(API_URL + '/register', {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    //return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
