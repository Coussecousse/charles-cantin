import React from "react";
import classes from './Header.module.css';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';


export default function Header() {
    return (
        <header>
            <div className={classes.HeaderContainer}>
                <Logo></Logo>
                <nav>
                    <Navigation></Navigation>
                </nav>
            </div>
        </header>
    );
}