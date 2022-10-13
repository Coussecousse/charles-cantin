import React, { useEffect } from "react";
import data from "../../home.json";
import classes from "./Home.module.css";

export default function Home(){

    useEffect(() => {
        const h2 = document.querySelector('h2');
        setTimeout(() => {
            h2.classList.add("activeSecondAnimation");
        }, 500);
        document.title = data[0].siteTitle + ' | Accueil'
        document.querySelector('meta[name="description"]').setAttribute("content", data[0].description);


        function preload(image) {
            let newImage = new Image();
            newImage.src = image;
        }
        const backgroundImage = "https://charles-cantin-photography.netlify.app/images/home.jpg";
        preload(backgroundImage);
    })

    return(
        <main className={classes.Home} id="home">
            <div className={classes.TitleContainer}>
                <h1 className="firstAnimation">{data[0].homeTitle}</h1>
                <h2 className="secondAnimation">{data[0].subTitle}</h2>
            </div>
        </main>
    )
}