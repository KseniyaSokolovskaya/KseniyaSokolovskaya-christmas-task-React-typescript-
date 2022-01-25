import React from 'react';

import './index.scss';

const Footer: React.FC = () => (
  <footer className="footer content">
    <ul className="footer-list list">
      <li className="list__item">
        <a href="https://rs.school/js/">
          <img src="https://rs.school/images/rs_school_js.svg" className="rss-logo" alt="rsschool-logo" />
        </a>
      </li>
      <li className="list__item">
        <a href="https://github.com/KseniyaSokolovskaya">Kseniya Sokolovskaya</a>
      </li>
      <li className="list__item">2021</li>
    </ul>
  </footer>
);

export default Footer;
