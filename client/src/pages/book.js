import React, { useState, useEffect, useContext } from 'react'
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import "./css/book.css";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Auth from "../utils/Auth";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../utils/UserContext";
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
  const [user, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (Auth.isAuthenticated)
    {
      fetch('api/users/user', {
        credentials: 'include'
      })
        .then((res) => {
          console.log(`response to authenticate ${res}`);
          return res.json(res)
  
        })
        .then(data => {
          console.log(data);
          dispatch({
            type: "GET_USER",
            payload: data
          })
  
        })
        .catch((err) => {
          console.log('Error fetching authorized user.');
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleBookSave = id => {
    const mainBook = book.find(book => book.id === id);

    API.saveBook({
      googleId: mainBook.id,
      title: mainBook.volumeInfo.title,
      subtitle: mainBook.volumeInfo.subtitle,
      link: mainBook.volumeInfo.infoLink,
      authors: mainBook.volumeInfo.authors,
      description: mainBook.volumeInfo.description,
      image: mainBook.volumeInfo.imageLinks.thumbnail,
      userId: user._id
    });
};

  return (
    <div className="background">
      {book.volumeInfo ? (
          <>

          <Grid container justify="center">
            <Grid className="flex-wrap-reverse" container spacing={10}>
              <Grid item sm={10} justify="center">
                <Paper className="homeLink">
                  <Icon to="/search">Recommend</Icon>
                </Paper>
              </Grid>
              <Grid item sm={2}>
                <div className="btn-container">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={book.volumeInfo.infoLink}
                  >
                    View
                  </a>
                  {Auth.isAuthenticated ? (
                    <button
                      onClick={() => handleBookSave()}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  ): <></>}
                </div>
              </Grid>
            </Grid>

            <div className="wrapper">
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
            </div>
          </Grid>
        
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Book;
