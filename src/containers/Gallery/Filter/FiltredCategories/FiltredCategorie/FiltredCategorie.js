import React, { useEffect } from "react";

export default function FiltredCategorie(props) {
    useEffect(() => {
        const filters = document.querySelectorAll('.filterActive');
        filters.forEach(filter => {
            filter.style.opacity = "1";
        })
    }, [props.children])

    return(
        <li className="filterActive">
            <p>{props.children}</p>
            <button onClick={props.removeCategorie}><i className="fa-solid fa-xmark" aria-labelledby="Remove filter"></i></button>
        </li>
    )
}