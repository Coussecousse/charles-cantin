import React from "react";
import classes from "./FiltredCategories.module.css";

import FiltredCategorie from './FiltredCategorie/FiltredCategorie'

export default function FiltredCategories(props) {
    return (
        <ul className={window.innerWidth >= 768 ? classes.FiltredCategoriesStyle : classes.FiltredCategoriesStyleMobile}>
            {props.filtredCategories.map((filtredCategorie, index)=> {
                return <FiltredCategorie key={index} removeCategorie={props.removeCategorie}>{filtredCategorie}</FiltredCategorie>
            })}
        </ul>
    )
}