import React from "react";

import Photo from './Photo/Photo';
import galleryPics from '../../../gallery.json'

export default function Photos() {
    const transformPosition = (position) => {
        if (typeof position == "string") {
            position = position.split('')
            for (let i = 0; i < position.length; i++){
                console.log(position[i])
                if (position[i] == '\"' || position[i] == '\r'){
                    position.splice(i, 1);
                }
            }
            position = position.join('')
            return position
        }
    }
    galleryPics.map(photo => {
        photo.posX = transformPosition(photo.posX);
        photo.posY = transformPosition(photo.posY);

        console.log(photo.posX + ' ' +  photo.posY);
    })
    return(     
        galleryPics.map(photo => (
            <Photo src={photo.pic} 
                   key={photo.id} 
                   alt={photo.alt} 
                   size={photo.size} 
                   posColumn={photo.placeColumn}
                   posImg={transformPosition(photo.posX) + '% ' + transformPosition(photo.posY) + '%'}></Photo>
        ))
        
    );
}