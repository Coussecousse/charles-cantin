import React from "react";

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';


export default function Header() {
    return (
        <header>
            <div>
                <Logo></Logo>
            </div>
            <nav>
                <Navigation></Navigation>
            </nav>
        </header>
    );
}