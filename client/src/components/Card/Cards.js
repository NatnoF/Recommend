import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
    return (
        <div className='cards'>
            <h1>These are some of our top picks!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src=""
                        text="placeholder book text"
                        label="book genre"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;