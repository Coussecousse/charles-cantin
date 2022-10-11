import React from "react";

export default function Categorie(props){

    
    return (
        <li onClick={props.filterClick}><button>{props.children}</button></li>
    )
}