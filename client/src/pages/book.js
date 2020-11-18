import React, { useState } from "react";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import "./css/book.css";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography/";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(108deg, #12232E, #007CC7)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const Book = () => {
  const [book, setBook] = useState({});
  const [count, setCount] = useState(0);

  const getBookInfo = () => {
    API.getBook(window.location.pathname.split("/").pop()).then((res) => {
      setBook(res.data);
    });
    // console.log(book);
  };

  if (count === 0) {
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
  };

  return (
    <div className="background">
      {book.volumeInfo ? (
        <div className="">
          <Grid container justify="center">
            <Grid className="flex-wrap-reverse" container spacing={3}>
              <Grid item sm={8} justify="center">
                <Paper className="homeLink">
                  <Icon to="/search">Recommend</Icon>
                </Paper>
              </Grid>
              <Grid item sm={4}>
                <div className="btn-container">
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={book.volumeInfo.infoLink}
                  >
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
              <Grid item sm={4}>
                <h2 className="font-italic header">{book.volumeInfo.title}</h2>
                {book.volumeInfo.subtitle && (
                  <h3 className="font-italic header">
                    {book.volumeInfo.subtitle}
                  </h3>
                )}
                <p className="font-italic small author">
                  <em>Written by {book.volumeInfo.authors.join(", ")}</em>
                </p>
              </Grid>
              <Grid item sm={4}>
                <img
                  className="img-thumbnail img-fluid w-100"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </Grid>
              <Grid item sm={4}></Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: book.volumeInfo.description,
                  }}
                ></p>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Book;
