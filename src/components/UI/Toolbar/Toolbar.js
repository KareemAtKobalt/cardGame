import React from 'react';
import classes from './Toolbar.css';
import Navigations from '../Navigations/Navigations';

const toolbar = () => (
    <header className={classes.Header}>
        <Navigations />
    </header>
);

export default toolbar;