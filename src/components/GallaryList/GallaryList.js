import React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";

import hotel1 from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";
import hotel4 from "../../assets/images/hotel4.jpg";
import hotel5 from "../../assets/images/hotel5.jpg";
import hotel6 from "../../assets/images/hotel7.jpg";
import beach1 from "../../assets/images/beach2.jpg";
import beach2 from "../../assets/images/beach2.jpg";
import beach3 from "../../assets/images/beach3.jpg";
import beach4 from "../../assets/images/beach4.jpeg";
import beach5 from "../../assets/images/beach5.jpg";
import beach6 from "../../assets/images/beach6.jpg";
const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    margin: "10px",
  },
}));

export default function GallaryList() {
  const classes = useStyles();
  let tileData = [
    hotel1,
    hotel2,
    hotel3,
    hotel4,
    hotel5,
    hotel6,
    beach1,
    beach2,
    beach3,
    beach4,
    beach3,
    beach4,
  ];
  return (
    <Container maxWidth="md">
      <Grid container justify="center" className={classes.root}>
        {tileData.map((tile, index) => (
          <img className={classes.image} src={tile} alt={"tile"} />
        ))}
      </Grid>
    </Container>
  );
}
