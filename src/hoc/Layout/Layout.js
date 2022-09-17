import React from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import data from "../../global.json";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Layout(props){
    let background;
    let location = useLocation();

    const isItHome = () => {
        if (location.pathname){
            return true;
        } else {
            return false;
        }
    }
    const getBackground = () => {
        switch(location.pathname){
            case '/' : 
                background  = {
                    backgroundImage :  'url(' + data[0].picHome +')',
                    backgroundSize : 'cover',
                    backgroundPosition: 'center',
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
        // <div style={(isItHome()) ? {height : '100vh'} : undefined }>
        <>
            <div className={classes.Container} style={(isItHome()) ? {height : '90vh'} : undefined}>
                <div className={classes.Background} style={background}></div>
                <div style = {{border : 'solid', height : '100%'}}>
                    <Header></Header>
                    {props.children}
                </div>
            </div>
            <Footer></Footer>
        </>
        // {/* </div> */}
    )
}