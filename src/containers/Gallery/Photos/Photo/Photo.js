import React from "react";
import classes from './Photo.module.css'

export default function Photo(props) {
    function getSize() {
        switch(props.size){
            case '3/3' : 
            case '3/3\r':
                return {
                    gridColumn: 'span 2'
                }
            case '2/3' : 
            case '2/3\r':
                return {
                    gridColumn: 'span 2'
                }
            case '1/3': 
            case '1/3\r' :               
            return {
                    gridColumn: 'span 1'
            }
            case '2/2': 
            case '2/2\r' :
                return {
                    gridColumn: 'span 2'
                }
            case '1/2': 
            case '1/2\r':
                return {
                    gridColumn: 'span 1'
                }
            default:
                return {
                    gridColumn: 'span 2' 
                }
        }
    }
    
    return(
        <div style={getSize()} className={classes.PhotoContainer}>
            <img className="photoAnimation" src={props.src} alt={props.alt} style={{objectPosition : props.posImg}} onClick={props.click}></img>
        </div>
    )
}