import React, { useState, useContext, useEffect } from "react";
import API from "../utils/API";
import "./css/book.css";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Auth from "../utils/Auth";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../utils/UserContext";
import { FooterContainer } from "../components/Footer/footercontainer";
import Reviews from "../components/Reviews";
import "../components/Reviews/style.css";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";




const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(108deg, #12232E, #007CC7)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
    avatar: {
     backgroundColor: red[500],
    },
}));

const Book = () => {
  const [book, setBook] = useState({});
  const classes = useStyles();
  const [value, setValue] = React.useState("recommend");
  const [reviewText, setReviewText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getBookInfo();
    getReviews();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getReviews = () => {
    API.getReviews(window.location.pathname.split("/").pop())
    .then(res => 
      setReviews(res.data)
    )
    .catch(() =>
      setReviews([])
    );
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = event => {
    setReviewText(event.target.value);
  };

  const getBookInfo = () => {
    API.getBook(window.location.pathname.split("/").pop()).then((res) => {
      setBook(res.data);
    });
    // console.log(book);
  };

  const handleBookSave = () => {
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      usersSaved: user.username,
    }).catch((err) => {
      API.updateBook(book.id, { user: user.username });
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    reviewSave();
};

const reviewSave = () => {
  API.saveReview({
    recommend: value,
    text: reviewText,
    username: user.username,
    likes: 0,
    dislikes: 0,
    bookId: window.location.pathname.split("/").pop()
  })
  .then(() => {
    getReviews();
    setReviewText("");
  });
};

  return (
    <div className="background">
      {book.volumeInfo ? (
        <>
            <Grid className="flex-wrap-reverse" container spacing={0}>
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
                  ) : (
                    <a className="btn btn-primary" href="/signin">
                      Log In To Save
                    </a>
                  )}
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
                  {/* <Paper className="review">recommended percentage</Paper> */}
                  <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Reviewer's Username and avatar icon"
        subheader="November 20, 2020"
      />
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
              <Grid className="flex-wrap-reverse" container spacing={0}>
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
                        value={reviewText}
                        onChange={handleInputChange}
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
                          value="Recommended"
                          control={<Radio />}
                          label="Recommend"
                        />
                        <FormControlLabel
                          value="Not Recommended"
                          control={<Radio />}
                          label="Not Recommend"
                        />
                      </RadioGroup>
                    </FormControl>
                    {Auth.isAuthenticated ? (
                      <button className="btn btn-primary reviewButton" onClick={handleFormSubmit}>
                        Submit
                      </button>
                    ): (
                      <button className="btn btn-primary reviewButton">
                        Log In To Submit A Review
                      </button>
                    )}
                  </Card>
                </Grid>
              </Grid>
              
              {reviews.length ? (
                <>
                {reviews.map(review => (
                  <Grid className="flex-wrap-reverse" container spacing={4}>
                    <Grid item sm={12} justify="center" className="reviewCard">
                      <Reviews 
                        recommend={review.recommend}
                        text={review.text}
                        username={review.username}
                        likes={review.likes}
                        dislikes={review.dislikes}
                        bookId={review.bookId}
                        id={review._id}
                      />
                    </Grid>
                  </Grid>
                ))}
                </>
              ): (
                <h2>No Reviews Found</h2>
              )}
            </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <FooterContainer />
    </div>
  );
};

export default Book;
