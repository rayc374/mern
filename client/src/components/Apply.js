import { useLocation } from 'react-router';

const Apply = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  return (
    <div>
      <h1>申請區</h1>
      <form>
        <input></input>
        <select>
          <option>123</option>
          <option>123</option>
          <option>123</option>
          <option>123</option>
          <option>123</option>
        </select>
      </form>
    </div>
  );
};

export default Apply;
