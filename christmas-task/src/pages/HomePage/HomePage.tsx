import React from 'react';
import { useNavigate } from 'react-router';

import './index.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="home-title">Помогите бабушке нарядить елку</h1>
      <button className="home-btn" type="submit" onClick={() => navigate('/toys')}>
        Начать
      </button>
    </div>
  );
};

export default HomePage;
