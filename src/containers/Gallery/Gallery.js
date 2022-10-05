import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import classes from './Gallery.module.css'

import Filter from './Filter/Filter';
import Photos from './Photos/Photos';
import galleryData from '../../gallery.json';


function removeFromIndex(elementToScan, elementToRemove){
    const index = elementToScan.indexOf(elementToRemove);
    elementToScan.splice(index, 1);
}

export default function Gallery(props) {
    let currentURL, currentSort, input;
    const [searching, setSearching]       = useState(false);
    const [InputValue, setInputValue]     = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories]     = useState([]);
    const [filtredCategories, setFiltredCategories] = useState([]);

    function getCurrentSort(container=[]){
        currentURL  = Object.fromEntries([...searchParams]);
        currentSort = currentURL.sort;

        if (currentSort === undefined){
            setFiltredCategories([]);
            restaureCategories(container);
            container = [...new Set(container)];
            setCategories(container);
            return;
        }
        currentSort = currentSort.split('+');
    }
    function restaureCategories(container) {
        galleryData.forEach((photo) => {
            let multipleCategories = photo.categories;

            for (let categorie of multipleCategories){
                categorie = categorie.split('');
                categorie = categorie.filter(item => item !== '\r');
                categorie = categorie.join('');
                container.push(categorie);
            }            
        })
        
    }
    useEffect(() => {
        let newCategorie = [];

        getCurrentSort();

        // Check the url for avoid bugs
        if (currentSort === ''){
            setSearchParams({});
            return;
        } else if (currentSort === undefined){
            return;
        } else if (currentSort[0] === ''){
            setSearchParams({});
            return;
        }

        let newFiltredCategories = [];

        // Add categorie filtred from the url search params
        const getFiltredCategories = () => {
            for (let categorie of currentSort){
                let change = false;

                categorie    = categorie.split('');
                categorie[0] = categorie[0].toUpperCase();
                categorie    = categorie.join('');

                const checkIfCategorieExist = () => {
                    for (let photo of galleryData) {
                        if (change === true){
                            break;
                        }
                        for (let photoCategorie of photo.categories) {
                            if (categorie + '\r' === photoCategorie){
                                change = true;
                                break;
                            }
                        }
                    }
                }
                checkIfCategorieExist();

                if (change) {
                    newFiltredCategories.push(categorie);
                } else {
                    // New url without the wrong categorie
                    removeFromIndex(currentSort, categorie);
                    setSearchParams({ sort: currentSort });
                }

            }
        }
        getFiltredCategories();

        restaureCategories(newCategorie);
        newCategorie = [...new Set(newCategorie)];

        // Remove filtred catégories from all list catégories
        for (let removeCategorie of newFiltredCategories){
            removeFromIndex(newCategorie, removeCategorie);
        }

        setFiltredCategories(newFiltredCategories);
        setCategories(newCategorie);
        
    }, [searchParams]);

    function closeFilter(e) {
        input       = document.querySelector('#filter');    
        let buttons = document.querySelectorAll('#filter-button');

        if (buttons.length > 0 || e.target === input){
            if (e.target === input) {
                setSearching(true);
            } else {
                let result;
                buttons.forEach(button => {
                    if (e.target === button){
                        result   = true;
                    }
                })
                if (result ===  true){
                    setSearching(true);
                } else {
                    setSearching(false);
                }
            }
        } else {
            setSearching(false);
        }
    }    

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleRemoveCategorie(e) {
        let categorieToRemove = (e.target.previousSibling);
        const getCategorieToRemove = () => {
            if (categorieToRemove == null){
                categorieToRemove  = (e.target.parentElement.previousSibling);
            }
            categorieToRemove = categorieToRemove.textContent;
        }

        // console.log(categorieToRemove.parentElement)
        // categorieToRemove.parentElement.className.add('filterDesactive')
        const removeTheCategorieInURL = () => {
            categorieToRemove = categorieToRemove.toLowerCase();

            getCurrentSort();

            removeFromIndex(currentSort, categorieToRemove);
            currentSort = currentSort.join('+');
        }

        getCategorieToRemove();
        removeTheCategorieInURL();
        
        setSearchParams({ sort: currentSort });
    }

    function handleAddFilter(e) {
        let chosenCategorie = e.target.innerHTML;

        currentURL      = Object.fromEntries([...searchParams]);

        chosenCategorie = chosenCategorie.toLowerCase();

        if (Object.keys(currentURL).length === 0){
            setSearchParams({ sort: chosenCategorie });
        } else {
            const oldSort = currentURL.sort;
            setSearchParams({ sort: oldSort + '+' + chosenCategorie});
        }
        setSearching(true);
    };
    
    return(
        <main onClick={closeFilter}>
            <h1 className="titleSection firstAnimation">Galerie</h1>
            <div className="container" id="container">
                <Filter searching={searching} 
                        change={handleChange} 
                        value={InputValue} 
                        filtredCategories = {filtredCategories}
                        filterClick={handleAddFilter}
                        removeCategorie={handleRemoveCategorie}
                        categories={categories}></Filter>
                <div className={props.mobile ? classes.PicsContainerMobile : classes.PicsContainer}>
                    <Photos categories={filtredCategories} mobile={props.mobile}></Photos>
                </div>
            </div>
        </main>
    );
}