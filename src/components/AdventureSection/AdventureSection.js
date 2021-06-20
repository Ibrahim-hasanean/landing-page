import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import AdventureCard from "../AdventureCard/AdventureCard";
import cubaImage from "../../assets/images/cuba.jpg";
import halong from "../../assets/images/halong.jpg";
import costarica from "../../assets/images/costarica.jpg";
let useStyle = makeStyles((theme) => ({
  root: {
    padding: "40px 0",
  },
  purpletext: {
    color: purple[500],
    margin: theme.spacing(0, 1),
  },
}));
const AdventureSection = () => {
  let classes = useStyle();
  let advntureCards = [
    {
      title: "Cuba",
      description:
        "loren ipusm as ameet soncsequasd asdasd asdasda.loren ipusm as ameet soncsequasd asdasd asdasda.",
      imageSrc: cubaImage,
    },
    {
      title: "Halong Bay",
      description:
        "loren ipusm as ameet soncsequasd asdasd asdasda.loren ipusm as ameet soncsequasd asdasd asdasda.",
      imageSrc: halong,
    },
    {
      title: "Costa rika",
      description:
        "loren ipusm as ameet soncsequasd asdasd asdasda.loren ipusm as ameet soncsequasd asdasd asdasda.",
      imageSrc: costarica,
    },
  ];
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item container justify="center">
        <Typography className={classes.purpletext} variant="h6">
          AirPnP
        </Typography>
        <Typography variant="h6">Adventure</Typography>
      </Grid>
      <Grid item container justify="center">
        {advntureCards.map((item, index) => (
          <AdventureCard item={item} key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default AdventureSection;
