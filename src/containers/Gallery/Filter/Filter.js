import React, { useState, useEffect } from "react";

import galleryData from '../../../gallery.json'

export default function Filter() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categoriesTab = [];

        galleryData.map((photo) => {
            let multipleCategories = photo.categories;

            multipleCategories = multipleCategories.split(" ");
            for (let categorie of multipleCategories){
                categorie = categorie.split('');
                categorie = categorie.filter(item => item !== '\r');
                categorie = categorie.join('');

                categoriesTab.push(categorie);
            }            
            categoriesTab = [...new Set(categoriesTab)];

            setCategories(categoriesTab);
        })
    }, [])
    return(
        <div>
            <input id="filter" type="text" name="filter" placeholder="Filter"/>
        
        </div>
    )
}