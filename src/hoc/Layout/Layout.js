import React from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

const Layout = (props) => (
    <div>
        <Toolbar />
        <main className={classes.Content}>
            <div className={classes.Grid}>
                <div className={classes.Center}>
                    {props.children}
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default Layout;