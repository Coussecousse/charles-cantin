import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import data from "../../global.json";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Layout(props){
    let location = useLocation();
    const [home, setHome] = useState(false);

    const styleContainer = () => {
        if (props.mobile){
            return { minHeight : '100vh' }
        } else if (home){
            return { minHeight : '100vh', overflowY: 'hidden'}
        } else {
            return { minHeight : '90vh' }
        }
    }
    const getBackground = () => {
        switch(location.pathname){
            case '/':
                if (props.mobile){
                    return {
                        backgroundImage : 'url(images/home.jpg)',
                        backgroundPosition: "68% 30%",
                        filter : 'blur(2px)',
                    }
                } else {
                    return {
                        height: '100vh',
                        backgroundImage :  'url(' + data[0].picHome +')',
                        backgroundPosition: "center",
                        filter : 'blur(2px)',
                    };
                }
            case '/galerie' :
            case '/prestations' :
                return {
                    backgroundColor : 'var(--color-primary)',
                }
            case '/contact':
            console.log('contact')
                if (props.mobile) {
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backgroundPosition : 'center',
                        filter : 'blur(2px)',
                    }
                } else {
                    return {
                        backgroundImage : 'url(' + data[0].picContact +')',
                        backgroundPosition : 'center',
                        filter : 'blur(2px)',
                    }
                }
            default :
                return {
                    backgroundColor : '#fff',
                }
        }
    }
    useEffect(() => {
        const home = document.querySelector('#home');
        
        if (home == null){
            setHome(false);
        } else {
            setHome(true);

            const headerAndFooter = document.querySelectorAll('.animeHome');
            setTimeout(() => {
                headerAndFooter.forEach(element => {
                    element.classList.add('animeHomeActive');
                })
            }, 800)
        }
    })

    return (
        <>
            <div className={classes.Container} style={styleContainer()}>
                <div className={classes.Background} style={getBackground()}></div>
                <div className={classes.ChildContainer}>
                    <Header mobile={props.mobile} home={home}></Header>
                    {props.children}
                </div>
            </div>
            {props.mobile ? null : <Footer home={home}></Footer>}
        </>
    )
}