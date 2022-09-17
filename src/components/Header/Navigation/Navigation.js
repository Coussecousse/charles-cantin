import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

import paths from "../../../config/paths";
import NavigationItem from './NavigationItem/NavigationItem'

export default function Navigation(){
    return (
        <ul className={classes.UlHeader}>
             <li>
                <NavLink to={paths.HOME} end className={({isActive}) => (isActive ? 'link active' : 'link')}>Accueil</NavLink>
            </li>
            <NavigationItem to={paths.GALLERY}>Galerie</NavigationItem>
            <NavigationItem to={paths.SERVICES}>Prestations</NavigationItem>
            <NavigationItem to={paths.CONTACT}>Contact</NavigationItem>
        </ul>
    )
}