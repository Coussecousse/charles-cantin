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
        
        if (e.target === button) {
            setOpenMenu(!menuOpen);
            return;
        }
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
        const main = document.querySelector('main');
        if (header === null) {
            return;
        }
        console.log(window.innerHeight);
        if (window.pageYOffset > 150 && window.innerHeight > 900) {
            header.style.position = 'fixed';
            header.style.background = 'var(--color-600)';

            const size = header.clientHeight;

            main.style.paddingTop = size + 'px';
        } else {
            header.style.position = 'static';
            header.style.background = 'transparent';
            
            main.style.paddingTop = '0px';
        }
    })
    
    function classNamesHeader() {
        let classNames = [];
        
        props.mobile ? classNames.push("header-mobile") : classNames.push("header-desktop") ;
        props.home ? classNames.push("animeHome") : classNames.push('notHome');

        return classNames.join(' ');
    } 
    
    return (
        <header className= {classNamesHeader()} >
            <div className={props.home ? [classes.HeaderContainer, "animeHome"].join(' ') : classes.HeaderContainer}>
                <Logo></Logo>
                {props.mobile ? <MobileNavigation clic={e => handleMenu(e)} openMenu={menuOpen}></MobileNavigation>
                : <nav>
                    <Navigation></Navigation>
                  </nav>}
            </div>
        </header>
    );
}