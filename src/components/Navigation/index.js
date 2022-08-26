import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <ul className="nav-list">
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.TEXT_INPUT}>TextInput</Link>
    </li>
    <li>
      <Link to={ROUTES.INTEGER_INPUT}>IntegerInput</Link>
    </li>
    <li>
      <Link to={ROUTES.FLOAT_INPUT}>FloatInput</Link>
    </li>
  </ul>
);



export default Navigation;
