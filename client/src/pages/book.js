import React, { useState } from 'react';
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';
import "./css/book.css";

const Book = () => {
  const [book, setBook] = useState({})
  const [count, setCount] = useState(0)

  const getBookInfo = () => {
    API.getBook(window.location.pathname.split("/").pop())
    .then(res => {
      setBook(res.data)
    }
    )
    // console.log(book);
  };

  if (count === 0 )
  {
    getBookInfo();
    setCount(count + 1);
  }

  const handleBookSave = () => {
    // API.saveBook({
    //   googleId: book.id,
    //   title: book.volumeInfo.title,
    //   subtitle: book.volumeInfo.subtitle,
    //   link: book.volumeInfo.infoLink,
    //   authors: book.volumeInfo.authors,
    //   description: book.volumeInfo.description,
    //   image: book.volumeInfo.imageLinks.thumbnail
    // });
    console.log("Work In Progress");
  }

    return (
      <>
        {book.volumeInfo ? (
          <>
            <Grid className="flex-wrap-reverse" container spacing={3}>
              <Grid item sm={8}>
                <h3 className="font-italic">{book.volumeInfo.title}</h3>
                {book.volumeInfo.subtitle && <h5 className="font-italic">{book.volumeInfo.subtitle}</h5>}
              </Grid>
              <Grid item sm={4}>
                <div className="btn-container">
                  <a className="btn" target="_blank" rel="noopener noreferrer" href={book.volumeInfo.infoLink}>
                    View
                  </a>
                  <button
                    onClick={() => handleBookSave()}
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <p className="font-italic small">Written by {book.volumeInfo.authors.join(", ")}</p>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={2}>
                <img className="img-thumbnail img-fluid w-100" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              </Grid>
              <Grid item xs={12} sm={8} md={10}>
                <p dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>
              </Grid>
            </Grid>
          </>
        ): <h1>Loading...</h1>}
      </>
    )
}

export default Book;