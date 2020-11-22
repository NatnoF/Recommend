import React from "react";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Reviews from "../components/Reviews";
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

function ReviewPage() {
  const classes = useStyles();
  return (
    <div className="backgroundColor">
      {/* HEADER WITH LINK  */}
      <Grid container justify="center">
        <Grid container spacing={12}>
          <Grid item sm={12} justify="center">
            <Paper className="homeLink">
              <Icon to="search">Reviews</Icon>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* REVIEW BOX */}
      <div className="wrapper">
        <Grid
          className="flex-wrap-reverse"
          container
          spacing={4}
          className="reviewPage"
        >
          <Grid item sm={12} justify="center" className="reviewCard">
            <Reviews />
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
}

export default ReviewPage;
