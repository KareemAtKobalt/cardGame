import React from 'react';
import classes from './Navigations.css';
import Navigation from './Navigation/Navigation';

const navigations = () => (
    <nav className={classes.Navigations}>
        <ul>
            <Navigation NavLinkPath="/" NavLinkName="Home" active/>
            <Navigation NavLinkPath="/AboutUs" NavLinkName="About Us" />
        </ul>
    </nav>
);

export default navigations;