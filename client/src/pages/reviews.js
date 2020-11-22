import React, { useState, useContext, useEffect } from "react";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Reviews from "../components/Reviews";
import { UserContext } from "../utils/UserContext";
import "./css/book.css";
import "./css/reviewPageStyles.css";
import { FooterContainer } from "../components/Footer/footercontainer";
import API from "../utils/API";
import Auth from "../utils/Auth";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";

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
  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    getReviewInfo();
    getComments();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getReviewInfo = () => {
    API.getReview(window.location.pathname.split("/").pop())
    .then(res => 
      setReview(res.data[0])
    );
  };

  const handleInputChange = event => {
    setCommentText(event.target.value);
  };

  const getComments = () => {
    API.getComments(window.location.pathname.split("/").pop())
    .then(res =>
      setComments(res.data)  
    );
  };

  const commentSave = () => {
    API.saveComment({
      text: commentText,
      username: user.username,
      reviewId: window.location.pathname.split("/").pop()
    })
    .then(() => {
      getComments();
      setCommentText("");
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    commentSave();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="backgroundColor">
      {/* HEADER WITH LINK  */}
      <Grid container justify="center">
        <Grid container spacing={12}>
          <Grid item sm={12} justify="center">
            <Paper className="homeLink">
              <Icon to={`/book/${review.bookId}`}>Reviews</Icon>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* REVIEW BOX */}
      <div className="wrapper">
        {review.recommend ? (
          <>
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
          {/* WRITE YOUR COMMENT */}
          <Grid container spacing={4}>
            <Grid item sm={12}>
              <Card className="reviewCard">
                <Grid>
                  <TextField
                    id="filled-multiline-static"
                    label="Your thoughts?"
                    value={commentText}
                    onChange={handleInputChange}
                    multiline
                    rows={5}
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                {Auth.isAuthenticated ? (
                  <button className="btn btn-primary reviewButton submitButton" onClick={handleFormSubmit}>
                    Write Comment
                  </button>
                ) : (
                  <button className="btn btn-primary reviewButton submitButton">
                    Log In To Post A Comment
                  </button>
                )}
              </Card>
            </Grid>
          </Grid>

          {/* SAVED COMMENTS */}
          {comments.length ? (
            <>
            {comments.map(comment => (
              <Grid container spacing={4} className="wrapper">
                <Grid item sm={12}>
                  <Card className="reviewCard">
                    <Grid>
                      <Card className={classes.root} fullwidth>
                        <CardHeader
                          avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                              {comment.username.charAt(0)}
                            </Avatar>
                          }
                          title={comment.username}
                          subheader={`Replying To: ${review.username}`}
                        />
                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {comment.text.length > 250 ? (comment.text.substring(0,250) + "...") : (comment.text) }
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography paragraph>{comment.text}</Typography>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            ))}
            </>
          ) : (
            <h2>No Comments Found</h2>
          )}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
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
