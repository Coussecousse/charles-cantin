import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './Footer.module.css'

import logo from '../../images/logo-footer.png'
import Navigation from "../Navigation/Navigation";
import SocialMedia from '../SocialMedia/SocialMedia';
import paths from "../../config/paths";

export default function Footer(props){
    const styleFooterHome = () => {
        if (props.home){
            return {
                width: '100vw',
                position: 'absolute',
                bottom: '0',
            };
        } else {
            return {width: '100vw'};
        }
    }

    return(
        <footer className={props.home ? 'animeHome' : null} style={styleFooterHome()} >
            <div className={classes.FooterContainer}>
                <NavLink to={paths.HOME}><img src={logo} alt="Logo appareil-photo" style={{height : '50px'}}></img></NavLink>
                <nav>
                    <Navigation></Navigation>
                </nav>
                <div className={classes.Media}>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </footer>
    )
}