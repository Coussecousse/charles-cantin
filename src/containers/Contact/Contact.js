import React from "react";

import servicesData from '../../services.json';

export default function Contact(props) {
    return(
        <main>
            <h1 className="titleSection">contact</h1>
            <div className="container">
                <form name="contact" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact"/>
                    <div hidden>
                        <input name="bot-field"/>
                    </div>

                    <div>
                        <label>NOM :
                            <input type="text" id="name" name="name" pattern='[A-Za-z]{3,50}' title="3 à 50 caractères requis" required></input>
                        </label>
                    </div>
                    <div>
                        <label>EMAIL :
                            <input type="email" id="email" name="email" pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,50}" title="Veuillez rentrer une adresse mail valide." required></input>
                        </label>
                    </div>
                    <div>
                        <label>TEL<span>*</span>
                            <input type="tel" id="tel" name="tel" pattern='[0-9]{4, 20}' title="Ne doit contenir que des chiffres et jusqu'à 20 caractères."></input>
                        </label>
                    </div>
                    <div>
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
                    <div>
                        <label>MESSAGE :
                            <textarea maxLength="500" pattern="{1,500}" title="500 caractères maximum."></textarea>
                        </label>
                    </div>
                    <input type="submit" value="Envoyer"></input>
                </form>
                <p>* Facultatif</p>
            </div>
        </main>
    )
}