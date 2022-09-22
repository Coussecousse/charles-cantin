import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import classes from './Gallery.module.css'

import Filter from './Filter/Filter';
import galleryData from '../../gallery.json';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { Button } from "bootstrap";


export default function Gallery() {
    let input;
    let currentCategories;
    const [searching, setSearching] = useState(false);
    const [InputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [filtredCategories, setFiltredCategories] = useState([]);


    useEffect(() => {
        
        // Variables
        let filtred = [];
        currentCategories = Object.fromEntries([...searchParams]);
        let categoriesTab = [];

        // Fonctions
        const lookForSearchFilter = () => {
            currentCategories = currentCategories.sort;
            currentCategories =  currentCategories.split('+');
    
            for( let categorie of currentCategories){
                categorie = categorie.split('');
                categorie[0] = categorie[0].toUpperCase();
                categorie = categorie.join('');
                filtred.push(categorie);
            }
            setFiltredCategories(filtred);
        }
        const addTheCategories = () => {
            galleryData.forEach((photo) => {
                let multipleCategories = photo.categories;
    
                multipleCategories = multipleCategories.split(" ");
                for (let categorie of multipleCategories){
                    categorie = categorie.split('');
                    categorie = categorie.filter(item => item !== '\r');
                    categorie = categorie.join('');
    
                    categoriesTab.push(categorie);
                }            
                
            })
            categoriesTab = [...new Set(categoriesTab)];
            setCategories(categoriesTab);
        }

        addTheCategories();
        if (Object.keys(currentCategories).length > 0){
            lookForSearchFilter()
        }
    }, [])

    useEffect(() =>{
        if (Object.keys(filtredCategories).length === 0){
            return;
        }
        const createCategoriesState = () => {
            let newCategories = [...categories];
            for (let filtredCategorie of filtredCategories) {
                const index = newCategories.indexOf(filtredCategorie);
                if (index != -1){
                    newCategories.splice(index, 1);
                }
            }

            setCategories(newCategories);
        }
        createCategoriesState();
    }, [filtredCategories]);

    function closeFilter(e) {
        input = document.querySelector('#filter');    
        let buttons = document.querySelectorAll('#filter-button');
        console.log(buttons.length)
        console.log(e.target)
        if (buttons.length > 0 || e.target == input){
            if (e.target == input) {
                setSearching(true);
            } else {
                let result;
                buttons.forEach(button => {
                    if (e.target == button){
                        result = true;
                    }
                })
                if (result ==  true){
                    setSearching(true);
                } else {
                    setSearching(false);
                }
            }
        } else {
            setSearching(false);
        }
    }
    useEffect(() => {
    }, [searching]);    

    function handleChange(e) {
        setInputValue(e.target.value);
    }


    function handleAddFilter(e) {
        // Add filter
        let chosenCategorie = e.target.innerHTML;
        let newCategorie = [...filtredCategories];
        newCategorie.push(chosenCategorie);

        setFiltredCategories(newCategorie);

        //setSearchParams : 
        currentCategories = Object.fromEntries([...searchParams]);

        chosenCategorie = chosenCategorie.toLowerCase();
        if (Object.keys(currentCategories).length === 0){
            setSearchParams({ sort: chosenCategorie });
        } else {
            const oldSort = currentCategories.sort;
            setSearchParams({ sort: oldSort+'+'+chosenCategorie});
        }
        setSearching(true)
    }

    return(
        <main onClick={closeFilter}>
            <h1 className="titleSection">Galerie</h1>
            <div className={classes.GalleryContainer}>
                <Filter searching={searching} 
                        change={handleChange} 
                        value={InputValue} 
                        filtredCategories = {filtredCategories}
                        filterClick={handleAddFilter}
                        categories={categories}></Filter>
            </div>
        </main>
    );
}