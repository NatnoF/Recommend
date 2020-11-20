import React from "react";
// STYLES
import "../Card/Cards.css";
import "./style.css";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }) {
  return (
      <>
    <Grid container spacing={4} className="wrapper">
      <Grid item sm={12}>
        <Card className="reviewCard">
          <Grid>
            <ReviewCard />
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
