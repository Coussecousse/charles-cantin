import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css'

import homeData from "../../home.json";
import contactData from "../../contact.json";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Layout(props){
    let location = useLocation();
    const [home, setHome] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
        console.log(location)
        if (location.search !== ''){
            return;
        }
        setIsLoaded(false);  

        setTimeout(() => {
            setIsLoaded(true);
        }, 400)
    }, [location]);


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
                let posXHome = homeData[0].posX[1] + homeData[0].posX[2];
                let posYHome = homeData[0].posY[1] + homeData[0].posY[2];
                let positionHome = posXHome +'% ' + posYHome + '%';
                if (props.mobile){
                    return {
                        backgroundImage :  'url(' + homeData[0].pic +')',
                        backgroundPosition: positionHome,
                        filter : 'blur(2px)',
                    }
                } else {
                    return {
                        height: '100vh',
                        backgroundImage :  'url(' + homeData[0].pic +')',
                        backgroundPosition: positionHome,
                        filter : 'blur(2px)',
                    };
                }
            case '/contact':
                let posXContact = contactData[0].posX[1] + contactData[0].posX[2];
                let posYContact = contactData[0].posY[1] + contactData[0].posY[2];
                let positionContact = posXContact +'% ' + posYContact + '%';
                if (props.mobile) {
                    return {
                        backgroundImage : 'url(' + contactData[0].pic +')',
                        backgroundPosition : positionContact,
                        filter : 'blur(2px)',
                    }
                } else {
                    return {
                        backgroundImage : 'url(' + contactData[0].pic +')',
                        backgroundPosition : positionContact,
                        filter : 'blur(2px)',
                    }
                }
            case '/galerie' :
            case '/prestations' :
            case '/contact/success' :
            default :
                return {
                    backgroundColor : 'var(--color-primary)',
                }

        }
    }
    // eslint-disable-next-line
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
    });

    return (
        <>
            {isLoaded ?  
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
            : <div style={{width: "100vw", height: "100vh", background:"var(--color-600"}}><div className={classes.LdsRing}><div></div><div></div><div></div><div></div></div></div>
            }

        </>

    )
}