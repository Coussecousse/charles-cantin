import React, { useState, useEffect } from "react";
import classes from './Filter.module.css';

import Categories from './Categories/Categories';

export default function Filter(props) {

    useEffect(() => {        
        console.log(props.searching)
    },[])
    return(
        <div className={classes.Filter}>
            <input id="filter" type="text" name="filter" placeholder="Filter" onChange={props.change} autoComplete="off" className={props.searching ? classes.ActiveInput : null}/>
            {props.searching ? <Categories categories={props.categories} 
                                           value={props.value} 
                                           filterClick={props.filterClick}></Categories> : null}
        </div>
    )
}