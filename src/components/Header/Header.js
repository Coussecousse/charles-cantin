import React, { useEffect, useState} from "react";
import classes from './Header.module.css';


import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from './MobileNavigation/MobileNavigation'


export default function Header() {
    let [mobile, setMobile] = useState(false);
    const WindowSize = () => {
        let windowWidth = window.innerWidth;
        console.log(windowWidth)
        if (windowWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    useEffect(() => {
        WindowSize();
    }, [])

    window.addEventListener('resize', WindowSize);
    
    return (
        <header style={{height : '15%'}}>
            <div className={classes.HeaderContainer}>
                <Logo></Logo>
                <nav>
                    {mobile ? <MobileNavigation></MobileNavigation> : <Navigation></Navigation>}
                </nav>
            </div>
        </header>
    );
}