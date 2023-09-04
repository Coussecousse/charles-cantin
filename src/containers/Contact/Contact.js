import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Contact.module.css';

import servicesData from '../../services.json';
import contactData from '../../contact.json';
import homeData from '../../home.json';

export default function Contact() {
    useEffect(() => {
        const container = document.querySelector('.contactAnimation');
        setTimeout(() => {
            container.style.opacity = '1';
        }, 800);

        function preload(image) {
            let newImage = new Image();
            newImage.src = image;
        }
        const backgroundImage = "https://charles-cantin-photography.netlify.app/images/contact.jpg";
        preload(backgroundImage);
    });

    useEffect(() => {
        document.title = homeData[0].siteTitle + ' | Contact';
        document.querySelector('meta[name="description"]').setAttribute("content", contactData[0].description);
    }, []);

    let navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault();
        let myForm = document.getElementById("contact-form");

        let formData = new FormData(myForm);
        
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
        })
        .then(() => navigate('/contact/success'))
        .catch((error) => alert(error));
    }
    
    return(
        <main className={classes.FormMain}>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="tel"/>
                <select name="reason[]"></select>
                <textarea name="message"></textarea>
            </form>
            <h1 className="titleSection firstAnimation">contact</h1>
            <div className="container">
                <div className={[classes.Form, "contactAnimation"].join(' ')}>
                    <form name="contact" 
                          method="POST" 
                          onSubmit={submitHandler}
                          id="contact-form" 
                          >
                        <input type="hidden" name="form-name" value="contact"/>
                        <div hidden>
                            <label>
                                Ne pas remplir si vous êtes humain : <input name="bot-field" />
                            </label>
                        </div>

                        <div className={classes.InputDiv}>
                            <label>NOM :
                                <input type="text" id="name" name="name" maxLength="50" minLength="2" title="2 à 50 caractères requis" required></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>EMAIL :
                                <input type="email" id="email" name="email" minLength="5" maxLength="50" title="Veuillez rentrer une adresse mail valide."G required></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>TEL* :
                                <input type="tel" id="tel" name="tel" minLength="4" maxLength="20" title="Ne doit contenir que des chiffres et jusqu'à 20 caractères."></input>
                            </label>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>POUR...
                                <select name="reason[]" id="reason">
                                    {servicesData.map((service, index) => {
                                        return (
                                            <option key={index} value={service.title}>{service.title}</option>
                                        )
                                    })}
                                    <option value="Autre">Autre</option>
                                </select>
                            </label>
                        </div>
                        <div className={classes.Textarea}>
                            <label>MESSAGE :
                                <textarea maxLength="500" minLength="20" title="20 à 500 caractères maximum." placeholder="500 caractères maximum." name="message" required></textarea>
                            </label>
                        </div>
                        <button className={classes.BtnSend} type="submit">Envoyer<i className="fa-regular fa-paper-plane"></i></button>
                    </form>
                    <p style={{fontSize: '.8rem', marginTop: '1rem'}}>* Facultatif</p>
                </div>
            </div>
        </main>
    )
}