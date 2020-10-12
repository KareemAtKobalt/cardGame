import React from 'react';
import classes from './Layout.css';

const Layout = (props) => (
    <div>
        <header>HEADER</header>
        <main className={classes.Content}>
            {props.children}
        </main>
        <footer>FOOTER</footer>
    </div>
);

export default Layout;