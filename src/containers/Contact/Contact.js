import React, { useEffect } from "react";
import classes from './Contact.module.css';

import servicesData from '../../services.json';

export default function Contact(props) {
    useEffect(() => {
        const container = document.querySelector('.contactAnimation');
        setTimeout(() => {
            container.style.opacity = '1';
        }, 800)
    })
    return(
        <main className={classes.FormMain}>
            <h1 className="titleSection firstAnimation">contact</h1>
            <div className="container">
                <div className={[classes.Form, "contactAnimation"].join(' ')}>
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact"/>
                        <div hidden>
                            <label>
                                Ne pas remplir si vous êtes humain : <input name="bot-field" />
                            </label>
                        </div>
                        <input type="hidden" name="subject" 
                        value="Email correctement envoyé depuis https://charles-cantin-photography.netlify.app" />

                        <div className={classes.InputDiv}>
                            <label>NOM :
                                <input type="text" id="name" name="name" pattern='{2,50}' title="2 à 50 caractères requis" required></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>EMAIL :
                                <input type="email" id="email" name="email" title="Veuillez rentrer une adresse mail valide." required></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>TEL* :
                                <input type="tel" id="tel" name="tel" pattern='[0-9]{4, 20}' title="Ne doit contenir que des chiffres et jusqu'à 20 caractères."></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>POUR...
                                <select name="reason" id="reason">
                                    {servicesData.map((service, index) => {
                                        let serviceValue = service.title.split(' ');
                                        serviceValue = serviceValue.join('-');
                                        serviceValue = serviceValue.split("'");
                                        serviceValue = serviceValue.join('-');
                                        return (
                                            <option key={index} value={serviceValue}>{service.title}</option>
                                        )
                                    })}
                                    <option value="autre">Autre</option>
                                </select>
                            </label>
                        </div>
                        <div className={classes.Textarea}>
                            <label>MESSAGE :
                                <textarea maxLength="500" pattern="{1,500}" title="500 caractères maximum." placeholder="500 caractères maximum."></textarea>
                            </label>
                        </div>
                        <div>
                            <div data-netlify-recaptcha="true"></div>
                        </div>
                        <button className={classes.BtnSend} type="submit">Envoyer<i className="fa-regular fa-paper-plane"></i></button>
                    </form>
                    <p style={{fontSize: '.8rem', marginTop: '1rem'}}>* Facultatif</p>
                </div>
            </div>
        </main>
    )
}