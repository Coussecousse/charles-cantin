import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavigationItem.module.css';

export default function NavigationItem(props) {
    return (
        <li>
            <NavLink to={props.to} className={({isActive}) => (isActive ? classes.active : '')}>{props.children}</NavLink>
        </li>
    )
}