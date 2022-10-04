import React, { useState} from "react";
import classes from './Header.module.css';


import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from './MobileNavigation/MobileNavigation'


export default function Header(props) {
    const [menuOpen, setOpenMenu] = useState(false);
    function handleMenu(e) {
        const button = document.querySelector('#button-menu');
        const ulMenu = document.querySelector('#ul-menu');
        const lisMenu = ulMenu.children;

        for (let span of button.children) {
            if (e.target === span) {
                setOpenMenu(!menuOpen);
                return;
            }
        }
        for (let li of lisMenu) {
            if (e.target === li.children[0]) {
                setOpenMenu(!menuOpen);
                return;
            }
        }

    }
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.pageYOffset > 0) {
            header.style.position = 'fixed';
            header.style.background = 'var(--color-600)';
        } else {
            header.style.position = 'static';
            header.style.background = 'transparent';
        }
    })

    return (
        <header className= { props.mobile ? "header-mobile" : "header-desktop"}>
            <div className={classes.HeaderContainer} >
                <Logo></Logo>
                {props.mobile ? <MobileNavigation clic={e => handleMenu(e)} openMenu={menuOpen}></MobileNavigation>
                : <nav>
                    <Navigation></Navigation>
                  </nav>}
            </div>
        </header>
    );
}