import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import GallaryList from "../GallaryList/GallaryList";

let useStyle = makeStyles((theme) => ({
  span: {
    padding: "15px",
    background: purple[500],
  },
  purpletext: {
    color: purple[500],
    margin: "0 10px",
  },
}));
const PhotoGallary = () => {
  let classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.span}></Grid>
      <Grid item container justify="center" xs={12}>
        <Typography className={classes.purpletext} variant="h6">
          Photo
        </Typography>
        <Typography variant="h6">Gallary</Typography>
      </Grid>
      <Grid container>
        <GallaryList />
      </Grid>
    </Grid>
  );
};

export default PhotoGallary;
