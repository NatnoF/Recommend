import React from "react";
import CardItem from "../Card/CardItem";
// STYLES
import "../Card/Cards.css";
import "./style.css";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";

function BookResults({ books }) {
  return (
    <div className="cards background">
      <div className="cards__container">
        {books.length ? (
          <Grid container spacing={3}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardItem
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  authors={book.volumeInfo.authors.join(", ")}
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
