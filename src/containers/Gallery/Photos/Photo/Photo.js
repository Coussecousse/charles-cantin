import React, { useEffect } from "react";

export default function Photo(props) {
    
    function getSize() {
        switch(props.size){
            case '3/3\r' : 
                return {
                    gridColumn: props.posColumn + ' / span 3',
                    gridRow: props.posRow
                }
            case '2/3\r' : 
                return {
                    gridColumn: props.posColumn + ' / span 2',
                    gridRowStart: props.posRow
                    // gridColumn : props.posColumn

                }
            case '1/3\r': 
                return {
                    gridColumn: props.posColumn + ' / span 1',
                    gridRowStart: props.posRow
                    // gridColumn : props.posColumn
                }
            default:
                return {
                    width: '100%',
                    maxWidth: '800px'  
                }
        }
    }
    function setPosition() {
        return {
            // objectPosition : props.
        }
    }
    console.log(props.posRow);
    return(
        <div style={getSize()}>
            <img src={props.src} alt={props.alt} style={{objectPosition : props.posImg}}></img>
        </div>
    )
}