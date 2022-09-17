import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import data from "../../global.json";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Layout(props){
    const isItHome = () => {
        if (location.pathname){
            return true;
        } else {
            return false;
        }
    }
    let [mobile, setMobile] = useState(false);

    const WindowSize = () => {

        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        background = getBackground();
    }
    let location = useLocation();
    
    const getBackground = () => {
        console.log(data[0].posXYMobileHome)
        
        switch(location.pathname){
            case '/' : 
                if (mobile){
                    return {
                        backgroundImage :  'url(' + data[0].picHome +')',
                        backgroundSize : 'cover',
                        backgroundPosition: data[0].posXYMobileContact,
                        filter : 'blur(2px)',
                        height : '100%',
                    }
                } else {
                    return {
                        backgroundImage :  'url(' + data[0].picHome +')',
                        backgroundSize : 'cover',
                        backgroundPosition: 'center',
                        filter : 'blur(2px)',
                        height: '90%'
                    }
                }
                
            case '/galerie' : 
            case '/prestations' :
                if (mobile){
                    return {
                        backgroundColor : 'var(--color-primary)',
                        height: '100%'
                    }
                } else {
                    return {
                        backgroundColor : 'var(--color-primary)',
                        height: '90%'
                    }
                }
            case '/contact' :
                if (mobile){
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backdropFilter : 'blur(7px)',
                        heigth : '100%'
                    }
                } else {
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backdropFilter : 'blur(7px)',
                        height : '90%' 
                    }
                }
            default : 
                return {
                    background : '#fff'
                }
        }
    }
    let background = getBackground();
    console.log(background)

    // useEffect(() => {
    //     WindowSize();
    //     console.log('coucou');
    // }, [])
    window.addEventListener('resize', WindowSize);
    return (
        // <div style={(isItHome()) ? {height : '100vh'} : undefined }>
        <>
            <div className={classes.Container} style={(isItHome()) ? {height : '88vh'} : undefined}>
                <div className={classes.Background} style={background}></div>
                <div style = {{height : '100%'}}>
                    <Header mobile={mobile}></Header>
                    {props.children}
                </div>
            </div>
            {mobile ? null :<Footer></Footer>}
        </>
        // {/* </div> */}
    )
}