import React from "react";

export default function Categorie(props){

    
    return (
        <li onClick={props.filterClick} aria-labelledby="Click to add categorie"><button>{props.children}</button></li>
    )
}