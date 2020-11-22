import React from "react";
import { Link } from "react-router-dom";

function CardItem({ title, image, authors, id }) {
  return (
    <>
      <li className="cards__item" key={id}>
        <Link className="cards__item__link" to={`/book/${id}`}>
          <figure className="cards__item__pic-wrap" data-category={title}>
            <img src={image} alt={title} className="cards__item__img" />
          </figure>

          <div className="cards__item__info">
            <h5 className="cards__item__text">{authors}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
