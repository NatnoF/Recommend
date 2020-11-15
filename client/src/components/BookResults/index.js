import React from 'react';
import './BookResults.css';
import CardItem from '../Card/CardItem';
import '../Card/Cards.css';

function BookResults() {
    return (
        <div className="bookresults">
                <div className="cards">
                    <div className="cards__container">
                        {/* <div className="cards__wrapper"> */}


                            <ul className="cards__items">
                                                    <CardItem 
                                                    src="images/library.jpeg"
                                                    text="placeholder book text"
                                                    label="book genre"
                                                    path="/services"
                                                    />
                                                    <CardItem 
                                                    src="images/library.jpeg"
                                                    text="placeholder book text"
                                                    label="book genre"
                                                    path="/services"
                                                    />
                                                </ul>



                        {/* </div> */}
                    </div>
                </div>
                
        </div>
    )
}

export default BookResults;
