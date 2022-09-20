import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import data from "../../global.json";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Layout(props){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(false);
    let resize;

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowWidth]);

    window.addEventListener('resize', () => {
        function resizeFunction() {
            console.log(windowWidth);
            console.log(window.innerWidth);
            console.log('resize');
            let widthState = window.innerWidth;
            setWindowWidth(widthState);
        }
        clearTimeout(resize);
        resize = setTimeout(resizeFunction, 100)
    })

    let location  = useLocation();

    const isItHome = () => {

        if (location.pathname){
            return true;
        } else{
            return false;
        }
    }
    const getBackground = () => {
        switch(location.pathname){
            case '/': 
                if (mobile){
                    return {
                        backgroundImage : 'url(images/home.jpg)',
                        backgroundPosition: "75% 50%",
                        filter : 'blur(2px)',
                        height : '100%',
                    }
                } else {
                    return {
                        backgroundImage :  'url(' + data[0].picHome +')',
                        backgroundSize : 'cover',
                        backgroundPosition: "center",
                        filter : 'blur(2px)',
                        height : '90%',
                    };
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
            case '/contact': 
            console.log('contact')
                if (mobile) {
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backgroundPosition : 'center',
                        filter : 'blur(2px)',
                        height : '100%',
                    }
                } else {
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backgroundPosition : 'center',
                        filter : 'blur(2px)',
                        height : '90%',
                    }
                }
            default : 
                return {
                    backgroundColor : '#fff',
                }
        }
    }
    return (
        <>
            <div className={classes.Container} style={{height: '90vh'}}>
                <div className={classes.Background} style={getBackground()}></div>
                <div style = {{height : '100%'}}>
                    <Header mobile={mobile}></Header>
                    {props.children}
                </div>
            </div>
            {mobile ? null : <Footer></Footer>}
        </>
    )
}