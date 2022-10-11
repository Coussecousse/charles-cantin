import React, { useEffect } from "react";

import Cards from './Cards/Cards';
import servicesData from '../../services.json'
import homeData from '../../home.json'

export default function Gallery(props) {
    useEffect(() => {
        document.title = homeData[0].siteTitle + ' | Services';
        document.querySelector('meta[name="description"]').setAttribute("content", servicesData[0].description);
    }, []);

    return(
        <main>
            <h1 className="titleSection firstAnimation">Prestations</h1>
            <div className="container">
                <Cards mobile={props.mobile}></Cards>
            </div>
        </main>
    );

}