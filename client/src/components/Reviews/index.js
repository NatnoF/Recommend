import React from "react";
// STYLES
import "../Card/Cards.css";
import "./style.css";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ReviewCard from "./ReviewCard";

function Reviews({ recommend, text, username, likes, dislikes, bookId, id }) {
  return (
    <>
      <Grid container spacing={4} className="wrapper">
        <Grid item sm={12}>
          <Card className="reviewCard">
            <Grid>
              <ReviewCard
                recommend={recommend}
                text={text}
                username={username}
                likes={likes}
                dislikes={dislikes}
                bookId={bookId}
                id={id}
              />
            </Grid>
            {/* <button className="btn btn-primary reviewButton">
            Recommend/Not Recommend
          </button> */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Reviews;
