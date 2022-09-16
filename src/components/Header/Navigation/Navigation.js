import React from "react";
import paths from "../../../config/paths";
import classes from './Navigation.module.css';

import NavigationItem from './NavigationItem/NavigationItem'

export default function Navigation(){
    return (
        <ul className={classes.UlHeader}>
            <NavigationItem exact to={paths.HOME}>Accueil</NavigationItem>
            <NavigationItem to={paths.GALLERY}>Galerie</NavigationItem>
            <NavigationItem to={paths.SERVICES}>Prestations</NavigationItem>
            <NavigationItem to={paths.CONTACT}>Contact</NavigationItem>
        </ul>
    )
}