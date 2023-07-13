import React, {useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import classes from './Gallery.module.css'

import Filter from './Filter/Filter';
import Photos from './Photos/Photos';
import galleryData from '../../gallery.json';
import homeData from '../../home.json'


function removeFromIndex(elementToScan, elementToRemove){
    const index = elementToScan.indexOf(elementToRemove);
    elementToScan.splice(index, 1);
}

export default function Gallery(props) {
    let currentURL, currentSort, input;
    const gallery = [...galleryData.slice(1, galleryData.length)];
    
    const [searching, setSearching]       = useState(false);
    const [InputValue, setInputValue]     = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories]     = useState([]);
    const [filtredCategories, setFiltredCategories] = useState([]);
    const [photoClicked, setPhotoClicked] = useState([false, '']);
    const [loadNextOrPreviousPhoto, setNextOrPreviousPhoto] = useState(false);

    useEffect(() => {
        document.title = homeData[0].siteTitle + ' | Gallery'
        document.querySelector('meta[name="description"]').setAttribute("content", galleryData[0].description);
    }, [])

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
        gallery.forEach((photo) => {
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
                    for (let photo of gallery) {
                        if (change === true){
                            break;
                        }
                        for (let photoCategorie of photo.categories) {
                            if (categorie + '\r' === photoCategorie || categorie === photoCategorie){
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

        // eslint-disable-next-line
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

            const animeRemoveCategorie = () => {
                const parent = categorieToRemove.parentElement;
                parent.style.opacity = '0';
            }
            
            animeRemoveCategorie();
            categorieToRemove = categorieToRemove.textContent;
        }
        

        const removeTheCategorieInURL = () => {
            categorieToRemove = categorieToRemove.toLowerCase();

            getCurrentSort();

            removeFromIndex(currentSort, categorieToRemove);
            currentSort = currentSort.join('+');
        }

        getCategorieToRemove();
        setTimeout(() => {
            removeTheCategorieInURL();
            setSearchParams({ sort: currentSort });
        }, 200)
        
    }

    function handleAddFilter(e) {
        const ulFilter = document.querySelector('#ul-categories');
        let chosenCategorie
        if (e.target.parentElement === ulFilter){
            chosenCategorie = e.target.children[0].innerHTML;
        } else {
            chosenCategorie = e.target.innerHTML;
        }

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
    const handleClickPhoto = e => {       
        if (photoClicked[0] === true) {
            setPhotoClicked([!photoClicked[0], '']);
        } else {
            let previous = e.target.parentElement;
            previous = previous.previousSibling;
            if (previous != null){
                previous = previous.children[0];
            } else {
                previous = undefined;
            }

            let next = e.target.parentElement;
            next = next.nextSibling;
            if (next !== null){
                next = next.children[0];
            } else {
                next = undefined;
            }

            setPhotoClicked([!photoClicked[0], e.target, previous, next]);
        }
    }
    const resetButtons = () => {
        const rButton = document.querySelector('.fa-square-caret-right');            
        const lButton = document.querySelector('.fa-square-caret-left');
        rButton.style.display = "block";
        lButton.style.display = "block";
    }
    const handleNextPhoto = () => {
        setNextOrPreviousPhoto(false);
        resetButtons();
        let current = photoClicked[3];
        let previous = photoClicked[1];

        let next = current.parentElement;
        next = next.nextSibling;
        
        if (next !== null) {
            next = next.children[0]
        } else {
            next = undefined;
        }
        

        setPhotoClicked([true, current, previous, next]);
    }
    const handlePreviousPhoto = () => {
        setNextOrPreviousPhoto(false);
        resetButtons();

        let current = photoClicked[2];
        let next = photoClicked[1];

        let previous = current.parentElement;
        previous = previous.previousSibling;
        if (previous !== null) {
            previous = previous.children[0];
        } else {
            previous = undefined;
        }

        setPhotoClicked([true, current, previous, next]);

    }

    useEffect(() => {
        setNextOrPreviousPhoto(true);
    }, [photoClicked]);

    const handleClickBackgroudPhoto = (e) => {
        const container   = document.querySelector('#photo-container')
        const closeButton = container.querySelector('#close-button');
        
        if (e.target === container || e.target === closeButton || e.target === closeButton.children[0]){
            handleClickPhoto(e);
        }
    }
    //  Styles buttons hidden or not
    const firstPic = () => {
        const photosContainer = document.querySelector('#photos-container');
        let first = photosContainer.children[0].children[0];

        if (photoClicked[1] === first) {
            return {
                visibility: 'hidden'
            }
        }
    }
    const lastPic = () => {
        const photosContainer = document.querySelector('#photos-container');
        let last = photosContainer.children[photosContainer.children.length-1].children[0]

        if (photoClicked[1] === last) {
            return {
                visibility: 'hidden'
            }
        }
    }
    const photoSelectioned = (
        <div className={classes.PhotoClickedContainer} id="photo-container" onClick={e => handleClickBackgroudPhoto(e)}>
            {loadNextOrPreviousPhoto ? 
                <>
                    <div>
                        <div id="buttons-left-right">
                            <button id="previous" onClick={handlePreviousPhoto} style={firstPic()} aria-labelledby="Previous photo"><i className="fa-regular fa-square-caret-left"></i></button>
                            <button id="next" onClick={handleNextPhoto} style={lastPic()} aria-labelledby="Next photo"><i className="fa-regular fa-square-caret-right"></i></button>
                        </div>
                        <button id="close-button" aria-labelledby="Close photo"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <img src={photoClicked[1].src} alt={photoClicked[1].alt}></img>
                </>
            : <div className={classes.LdsRingContainer}><div className={classes.LdsRingGallery}><span></span><span></span><span></span><span></span></div></div>}
        </div>
    )
    return(
        <main onClick={closeFilter}>
            <h1 className="titleSection firstAnimation">Galerie</h1>
            <div className="container" id="container">
                <Filter searching={searching} 
                        change={handleChange} 
                        value={InputValue} 
                        filtredCategories = {filtredCategories}
                        filterClick={handleAddFilter}
                        removeCategorie={(e) => handleRemoveCategorie(e)}
                        categories={categories}></Filter>
                <div className={props.mobile ? classes.PicsContainerMobile : classes.PicsContainer} id="photos-container">
                    <Photos categories={filtredCategories} mobile={props.mobile} click={(e) => handleClickPhoto(e)}></Photos>
                </div>
            </div>
            {photoClicked[0] ? photoSelectioned : null}
        </main>
    );
}