import React from "react";
import classes from './Services.module.css'

import Cards from './Cards/Cards';

export default function Gallery(props) {
    return(
        <main>
            <h1 className="titleSection">Prestations</h1>
            <div className="container">
                <Cards mobile={props.mobile}></Cards>
            </div>
        </main>
    );

}