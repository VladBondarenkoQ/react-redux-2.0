import React from 'react';
import classes from './sidebar.module.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
    </nav>)
}

export default Sidebar;
