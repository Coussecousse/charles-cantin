import React from "react";
import classes from "./SocialMedia.module.css"

import data from '../../global.json'

export default function SocialMedia() {
    return(
        <>
            <a className={classes.SocialMedia} href={data[0].fb} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a className={classes.SocialMedia} href={data[0].insta} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        </>
    )
}