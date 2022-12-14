import React from "react";
import classes from './Categories.module.css';

import Categorie from './Categorie/Categorie';

export default function Categories(props) {

    const Allcategories = props.categories.map((categorie, index) => {
        if (categorie.toLowerCase().includes(props.value.toLowerCase()) || props.value === ''){
            return <Categorie key={index} filterClick={props.filterClick}>{categorie}</Categorie>
        } else {
            return null;
        }
    })

    
    return(
        <>
            <ul className={classes.UlCategories} id="ul-categories">
                {Allcategories}
            </ul>
        </>
    )
}