import React from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Footer(){
    return(
        <footer style={{width : '100vw'}}>
            <div style={{height : '60px', maxWidth : '800px', paddingTop: '.5rem'}}>
                <Logo></Logo>
                <nav>
                    <Navigation></Navigation>
                </nav>
                <div>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </footer>
    )
}