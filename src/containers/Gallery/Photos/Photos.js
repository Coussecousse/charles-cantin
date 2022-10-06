import React, { useEffect, useState } from "react";

import Photo from './Photo/Photo';
import galleryPics from '../../../gallery.json'

export default function Photos(props) {
    const [firstTime, setFirstTime] = useState(true);

    const transformPosition = (position) => {
        if (typeof position === "string") {
            position = position.split('')
            for (let i = 0; i < position.length; i++){
                if (position[i] === '\"' || position[i] === '"'){
                    position.splice(i, 1);
                }
            }
            if (position[position.length-1] == '\r'){
                position.splice(position.length - 1, 1);
            }
            position = position.join('');
            return position
        }
    }

    useEffect(() => {
        const container = document.querySelector('.container');
        const allImgs = container.querySelectorAll('img');

        allImgs.forEach((img, index) => {
            if (!firstTime) {
                img.classList.remove('photoActiveAnimation');
                img.style.opacity = '0';

                setTimeout(() => {
                    img.classList.add('photoActiveAnimation');
                    img.style.animationDuration = '.5s';
                    img.style.animationDelay = 0 + index/10 + 's';
                }, 100);
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 500 + index*115);

            } else {
                img.style.animationDelay= 0.6 + index/10 +'s';
                img.classList.add('photoActiveAnimation');

                setTimeout(() => {
                    img.style.opacity = '1';
                }, 1000 + index*115) 
                setTimeout(() => {
                    setFirstTime(false);
                }, 1000);
            }
        })
    }, [props.categories])

    return(     
        galleryPics.map(photo => {
            function affichedPic() {
                let result;
                if (props.categories.length === 0) {
                    return true;
                } 
                for (let categoriesPhoto of photo.categories) {
                    if (result === true) {
                        break;
                    }
                    for (let categoriesFiltred of props.categories) {
                        if (categoriesFiltred + '\r'=== categoriesPhoto) {
                            result = true;
                            break;
                        } else {
                            result = false;
                        }
                    }
                }
                return result;
            }
            console.log(photo.posX)
            return (
                (affichedPic() ? 
                    <Photo src={photo.pic} 
                        key={photo.id} 
                        alt={photo.alt} 
                        size={props.mobile ? photo.mobileSize : photo.size} 
                        posColumn={photo.placeColumn}
                        posImg={transformPosition(photo.posX) + '% ' + transformPosition(photo.posY) + '%'}></Photo>
                    : null
                )
            )
        })
        
    );
}