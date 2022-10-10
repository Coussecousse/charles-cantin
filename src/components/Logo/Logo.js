import React from "react";
import { NavLink } from "react-router-dom";

import paths from '../../config/paths';
import logo from '../../images/logo-header.png'

export default function Logo() {

    return (
        <>
            <NavLink to={paths.HOME} className={({isActive}) => (isActive ? '' : '' )}>
                <img src={logo} alt="Logo Charles Cantin"></img>
            </NavLink>
        </>
    )
}