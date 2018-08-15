import React from 'react';

import burgerLogo from '../../assets/images/burger_logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Myburger" />
  </div>
);

export default logo;