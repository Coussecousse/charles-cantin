import React from "react";
import { NavLink } from "react-router-dom";

import paths from '../../config/paths';


export default function Logo() {

    return (
        <>
            <NavLink to={paths.HOME} className={({isActive}) => (isActive ? '' : '' )}>
                <img src="images/logo-header.png" alt="Logo Charles Cantin"></img>
            </NavLink>
        </>
    )
}