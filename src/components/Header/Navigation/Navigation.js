import React from "react";
import paths from "../../../config/paths";

import NavigationItem from './NavigationItem/NavigationItem'

export default function Navigation(){
    return (
        <ul>
            <NavigationItem to={paths.HOME}>Accueil</NavigationItem>
            <NavigationItem to={paths.GALLERY}>Galerie</NavigationItem>
            <NavigationItem to={paths.SERVICES}>Prestations</NavigationItem>
            <NavigationItem to={paths.CONTACT}>Contact</NavigationItem>
        </ul>
    )
}