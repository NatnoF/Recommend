import React from "react";
import CardItem from "../Card/CardItem";
import "../Card/Cards.css";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function BookResults({ books }) {
  return (
      <div className="cards">
        <div className="cards__container">
            {books.length ? (
                <Grid container spacing={3}>
                  {books.map(book => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <CardItem 
                        key={book.googleId}
                        id={book.googleId}
                        title={book.title}
                        image={book.image}
                        authors={book.authors.join(", ")}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <h2 className="text">{"No Books Found"}</h2>
              )}
        </div>
      </div>
  );
}

export default BookResults;
