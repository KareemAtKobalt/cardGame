import React from 'react';
import { NavLink } from 'react-router-dom'; 
import classes from './Navigation.css';

const navigation = (props) => (
    <li className={classes.Navigation}>
        <NavLink to={props.NavLinkPath} exact activeStyle={{color: '#ffff00', textDecoration: 'underline'}}>
            <strong>{props.NavLinkName}</strong>
        </NavLink>
    </li>
);

export default navigation;