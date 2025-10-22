import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../const.ts';

export const Footer: FC = () => (
  <footer className="footer container">
    <Link className="footer__logo-link" to={Path.MAIN}>
      <img
        className="footer__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="64"
        height="33"
      />
    </Link>
  </footer>
);
