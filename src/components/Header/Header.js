import React, { useState} from "react";
import classes from './Header.module.css';


import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from './MobileNavigation/MobileNavigation'


export default function Header(props) {
    const [menuOpen, setOpenMenu] = useState(false);
    function handleMenu() {
        setOpenMenu(!menuOpen);
    }

    return (
        <header style={{height : '15%'}} className= { props.mobile ? "header-mobile" : "header-desktop"}>
            <div className={classes.HeaderContainer}>
                <Logo></Logo>
                {props.mobile ? <MobileNavigation clic={handleMenu} openMenu={menuOpen}></MobileNavigation>
                : <nav>
                    <Navigation></Navigation>
                  </nav>}
            </div>
        </header>
    );
}