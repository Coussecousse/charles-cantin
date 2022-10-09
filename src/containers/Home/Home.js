import React, { useEffect } from "react";
import data from "../../home.json";
import classes from "./Home.module.css";

export default function Home(){

    useEffect(() => {
        const h2 = document.querySelector('h2');
        setTimeout(() => {
            h2.classList.add("activeSecondAnimation");
        }, 500);
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