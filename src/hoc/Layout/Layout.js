import React from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import data from "../../global.json";
import Header from '../../components/Header/Header';


export default function Layout(props){
    let background;
    let location = useLocation();

    const getBackground = () => {
        switch(location.pathname){
            case '/' : 
                background  = {
                    backgroundImage :  'url(' + data[0].picHome +')',
                    backgroundSize : 'cover',
                    filter : 'blur(2px)',
                }
                break;
            case '/galerie' : 
            case '/prestations' :
                background = {
                    backgroundColor : 'var(--color-primary)'
                }
                break;
            case '/contact' :
                background = {
                    backgroundImage : 'url(' + data[0].picContact +')',
                    backdropFilter : 'blur(7px)'
                }
                break;
            default : 
                background = {
                    background : '#fff'
                }
        }
    }
    getBackground();
    return (
        <>
            <div className={classes.Background} style={background}></div>
            <div className={classes.Main}>
                <Header></Header>
                {props.children}
            </div>
            {/* {Footer} */}
        </>
    )
}