import React, { useState, useContext } from 'react'
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import "./css/book.css";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Auth from "../utils/Auth";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../utils/UserContext";

import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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

  const [value, setValue] = React.useState("recommend");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);

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
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      usersSaved: user.username
    })
    .catch(err => {
      API.updateBook(book.id, {user: user.username});
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
                  <h2 className="font-italic header">
                    {book.volumeInfo.title}
                  </h2>
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
                <Grid item sm={4}>
                  <Paper className="review">recommended percentage</Paper>
                </Grid>
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

            <div className="wrapper">
              <Grid className="flex-wrap-reverse" container spacing={4}>
                <Grid item sm={12} justify="center" className="reviewCard">
                  <Paper className="homeLink">
                    <Icon to="/search">User Reviews</Icon>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={4} className="wrapper">
                <Grid item sm={12}>
                  <Card className="reviewCard">
                    <Grid>
                      <TextField
                        id="filled-multiline-static"
                        label="what's your take?"
                        multiline
                        rows={5}
                        variant="filled"
                        fullWidth
                      />
                    </Grid>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="recommend"
                        name="recommend1"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Recommend"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="Not Recommend"
                        />
                      </RadioGroup>
                    </FormControl>
                    <button className="btn btn-primary reviewButton">
                      Submit
                    </button>
                  </Card>
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
