import React from "react";

export default function Photo(props) {
    
    console.log(props.posImg);
    function getSize() {
        switch(props.size){
            case '3/3\r' : 
                return {
                    gridColumn: 'span 3'
                }
            case '2/3\r' : 
                return {
                    gridColumn: 'span 2'
                }
            case '1/3\r': 
                return {
                    gridColumn: 'span 1'
            }
            default:
                return {
                    gridColumn: 'span 3' 
                }
        }
    }
    return(
        <div style={getSize()}>
            <img src={props.src} alt={props.alt} style={{objectPosition : props.posImg}}></img>
        </div>
    )
}