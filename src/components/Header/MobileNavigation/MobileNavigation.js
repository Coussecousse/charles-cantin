import React from "react";
import classes from './MobileNavigation.module.css'

import Navigation from "../../Navigation/Navigation";
import SocialMedia from "../../SocialMedia/SocialMedia";

export default function MobileNavigation(props) {
    
    const menu = classe => {

        return (
        <div className={[classes.DivNav, classe].join(' ')} id="menu-mobile">
            <div>
                <div className={classes.Choice}>
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
        <div>
            <button className={props.openMenu ? [classes.Menu, classes.ActiveCross].join(' ') : classes.Menu} onClick={props.clic}>
                <span></span>
            </button>
            {props.openMenu ? menu(classes.DivNavOpen) : menu(classes.DivNavClose)}
        </div>
    )
}