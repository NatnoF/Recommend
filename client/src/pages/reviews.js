import React from "react";
import { Icon } from "../components/SidebarMenu/SidebarMenuProperties";
import Reviews from "../components/Reviews";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function ReviewPage() {
  return (
    <>
      {/* HEADER WITH LINK  */}
      <Grid container justify="center">
        <Grid container spacing={10}>
          <Grid item sm={10} justify="center">
            <Paper className="homeLink">
              <Icon to="/search">Reviews</Icon>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <div className="wrapper">
        <Grid className="flex-wrap-reverse" container spacing={4}>
          <Grid item sm={12} justify="center" className="reviewCard">
            <Reviews />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ReviewPage;
