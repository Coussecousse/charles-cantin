import React from "react";

export default function Photo(props) {
    function getSize() {
        console.log(props.size)
        switch(props.size){
            case '3/3' : 
                return {
                    width: '100%',
                    maxWidth: '500px'
                }
        }
    }
    return(
        <img src={props.src} alt={props.alt} style={{width: '100%', maxWidth: '500px'}}></img>
    )
}