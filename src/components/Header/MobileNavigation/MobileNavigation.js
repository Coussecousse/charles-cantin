import React from "react";
import classes from './MobileNavigation.module.css'

import Navigation from "../../Navigation/Navigation";
import SocialMedia from "../../SocialMedia/SocialMedia";

export default function MobileNavigation(props) {

    return (
        <div className={props.openMenu ? classes.MenuOpen : null}>
            <button className={props.openMenu ? [classes.Menu, classes.ActiveCross].join(' ') : classes.Menu} onClick={props.clic}>
                <span></span>
            </button>
            {/* {props.openMenu ? {menuOpen} : {menuClose}}; */}
        </div>
    )
}