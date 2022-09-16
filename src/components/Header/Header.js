import React from "react";

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';


export default function Header() {
    return (
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <Navigation></Navigation>
            </nav>
        </header>
    );
}