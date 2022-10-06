import React, { useEffect } from "react";
import classes from './Cards.module.css'

import CardsInformations from '../../../services.json';
import Card from './Card/Card'

export default function Cards(props) {
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

    const card = CardsInformations.map(card => {
        let titleColor = card.color.split('"');
        titleColor = titleColor[1];
        return (
            <Card key={card.id} 
                  title={card.title} 
                  size={card.size}
                  color={titleColor}
                  content={card.content}
                  pic={card.pic}
                  price={card.price}
                  position={transformPosition(card.posX) + '% ' + transformPosition(card.posY) + '%'}>
            </Card>
        )
    })

    useEffect(() => {
        const container = document.querySelector('.container');
        const allCards = container.querySelectorAll('.card');

        allCards.forEach((card, index) => {
            card.style.animationDelay= 0.6 + index/10 +'s';
            card.classList.add('photoActiveAnimation');
            setTimeout(() => {
                card.style.opacity = '1';
            }, 1000 + index*115)       
        })
    })
    
    return (
        <ul className={props.mobile ? classes.CardsContainerMobile : classes.CardsContainer }>
            {card}
        </ul>
    )
}