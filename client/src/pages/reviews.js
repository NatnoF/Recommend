import React, { useState, useContext, useEffect } from "react";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Reviews from "../components/Reviews";
import { UserContext } from "../utils/UserContext";
import "./css/book.css";
import "./css/reviewPageStyles.css";
import { FooterContainer } from "../components/Footer/footercontainer";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import Auth from "../utils/Auth";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 950,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Review = () => {
  const classes = useStyles();
  const [user, dispatch] = useContext(UserContext);
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewInfo();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getReviewInfo = () => {
    API.getReview(window.location.pathname.split("/").pop())
    .then(res => 
      setReview(res.data[0])
    );
  };

  return (
    <div className="backgroundColor">
      {/* HEADER WITH LINK  */}
      <Grid container justify="center">
        <Grid container spacing={12}>
          <Grid item sm={12} justify="center">
            <Paper className="homeLink">
              <Icon to="/search">Reviews</Icon>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* REVIEW BOX */}
      <div className="wrapper">
        {review.recommend ? (
          <Grid
            className="flex-wrap-reverse reviewPage"
            container
            spacing={4}
          >
            <Grid item sm={12} justify="center" className="reviewCard">
              <Reviews 
                recommend={review.recommend}
                text={review.text}
                username={review.username}
                likes={review.likes}
                dislikes={review.dislikes}
                bookId={review.bookId}
              />
            </Grid>
          </Grid>
        ) : (
          <h2>Loading...</h2>
        )}

        {/* WRITE YOUR COMMENT */}
        <Grid container spacing={4}>
          <Grid item sm={12}>
            <Card className="reviewCard">
              <Grid>
                <TextField
                  id="filled-multiline-static"
                  label="Your thoughts?"
                  multiline
                  rows={5}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <button className="btn btn-primary reviewButton submitButton">
                Write Comment
              </button>
            </Card>
          </Grid>
        </Grid>

        {/* SAVED COMMENTS */}
        <Grid container spacing={4}>
          <Grid item sm={12}>
            <Card className="reviewCard savedComment">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Reviewer's Username and avatar icon"
              subheader="November 20, 2020"
            />
              <Grid>
                <TextField
                  id="filled-multiline-static"
                  label="saved comment box"
                  multiline
                  rows={5}
                  variant="filled"
                  fullWidth
                />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterContainer />
    </div>
  );
};

export default Review;
