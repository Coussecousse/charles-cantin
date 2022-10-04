import React from "react";
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
    return (
        <ul className={props.mobile ? classes.CardsContainerMobile : classes.CardsContainer }>
            {card}
        </ul>
    )
}