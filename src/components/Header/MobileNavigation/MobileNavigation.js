import React from "react";
import classes from './MobileNavigation.module.css'

import Navigation from "../../Navigation/Navigation";
import SocialMedia from "../../SocialMedia/SocialMedia";

export default function MobileNavigation(props) {
    
    const menu = classe => {

        return (
        <div className={[classes.DivNav, classe].join(' ')} id="menu-mobile">
            <div>
                <div>
                    <Navigation></Navigation>
                </div>
                <div className={classes.MediaDiv}>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </div>
        )
    }
    
    return (
        <div onClick={props.clic}>
            <button className={props.openMenu ? [classes.Menu, classes.ActiveCross].join(' ') : classes.Menu} id="button-menu">
                <span></span>
            </button>
            <div className={props.openMenu ? [classes.DivNav, classes.DivNavOpen].join(' ') : [classes.DivNav, classes.DivNavClose].join(' ')} id="menu-mobile">
                <div>
                    <div>
                        <Navigation></Navigation>
                    </div>
                    <div className={classes.MediaDiv}>
                        <SocialMedia></SocialMedia>
                    </div>
                </div>
            </div>
        </div>
    )
}