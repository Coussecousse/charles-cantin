import React from "react";

import Photo from './Photo/Photo';
import galleryPics from '../../../gallery.json'

export default function Photos(props) {
    const transformPosition = (position) => {
        if (typeof position === "string") {
            position = position.split('')
            for (let i = 0; i < position.length; i++){
                if (position[i] === '\"'){
                    position.splice(i, 1);
                }
            }
            position.splice(position.length - 1, 1);
            position = position.join('');
            return position
        }
    }


    return(     
        galleryPics.map(photo => {
            console.log(photo.mobileSize)
            function affichedPic() {
                let result;
                if (props.categories.length === 0) {
                    result = true;
                } 
                for (let categoriesPhoto of photo.categories) {
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