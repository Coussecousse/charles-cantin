import React, { useEffect } from "react";

export default function Photo(props) {
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
            case '2/2\r': 
                return {
                    gridColumn: 'span 2'
                }
            case '1/2\r': 
                return {
                    gridColumn: 'span 1'
                }
            default:
                return {
                    gridColumn: 'span 3' 
                }
        }
    }


    console.log(props.size)
    return(
        <div style={getSize()}>
            <img className="photoAnimation" src={props.src} alt={props.alt} style={{objectPosition : props.posImg}}></img>
        </div>
    )
}