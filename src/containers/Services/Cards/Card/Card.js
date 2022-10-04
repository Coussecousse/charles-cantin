import React from "react";

export default function Card(props) {
    function getSize() {
        switch(props.size){
            case '2/2\r': 
                return 'span 2';
            case '1/2\r':
                return 'span 1';
            default: 
                return 'span 2';
        }
    }
    const cardStyle= {
        gridColumn : getSize(),
        backgroundImage : 'url(' + props.pic +')',
        backgroundSize : 'cover',
        backgroundPosition: props.position,
        height: '465px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#fff',
        textAlign : 'center'
    }
    const contentContainer = {
        backgroundColor: 'hsl(195, 14%, 23%, 50%)', 
        backdropFilter: 'blur(2px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '0 1rem',
        height: '28%', 
        lineHeight: '1.3rem'
    }
    return (
        <li style={cardStyle}>
            <h2 style={{color: props.color, textTransform: 'uppercase', fontSize: '1.5rem', fontWeight:'var(--fw-600)', marginTop: '.5rem'}}>{props.title}</h2>
            <div style={contentContainer}>
                <p style={{fontSize:'clamp(1.5rem, 1.4rem + .5vw, 2rem)', fontFamily:'var(--ff-secondary)'}}>{props.price}</p>
                <p style={{fontSize: 'clamp(1rem, .95rem + .25vw, 1.25rem)'}}>{props.content}</p>
            </div>
        </li>
    )
}