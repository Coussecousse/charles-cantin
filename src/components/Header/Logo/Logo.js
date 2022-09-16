import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css"

import paths from '../../../config/paths';
import data from '../../../global';


export default function Logo() {

    return (
        <>
            <NavLink to={paths.HOME}>
                <img src={data[0].picLogo} alt="Tais toi mtn" className={classes.Logo}></img>
            </NavLink>
        </>
    )
}