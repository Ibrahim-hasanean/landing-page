import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { purple, grey } from "@material-ui/core/colors";
import HotelIcon from "@material-ui/icons/Hotel";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CardComponent from "../CardComponent/CardComponent";
let useStyle = makeStyles((theme) => ({
  root: {
    background: grey[200],
    padding: theme.spacing(5, 10),
  },
  purpletext: {
    color: purple[500],
    margin: theme.spacing(0, 1),
  },
}));
const ExploreSection = () => {
  let classes = useStyle();
  let exploreCard = [
    {
      title: "Hotels",
      description: "loren ipusm as ameet soncsequasd asdasd asdasda.",
      icon: HotelIcon,
    },
    {
      title: "Resturent",
      description: "loren ipusm as ameet soncsequasd asdasd asdasda.",
      icon: RestaurantIcon,
    },
    {
      title: "Coffe",
      description: "loren ipusm as ameet soncsequasd asdasd asdasda.",
      icon: LocalCafeIcon,
    },
    {
      title: "Shopping",
      description: "loren ipusm as ameet soncsequasd asdasd asdasda.",
      icon: ShoppingBasketIcon,
    },
  ];
  return (
    <Grid
      id="explore"
      className={classes.root}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item container justify="center">
        <Typography className={classes.purpletext} variant="h6">
          Explore
        </Typography>
        <Typography variant="h6">AirPnP</Typography>
      </Grid>
      <Grid item container justify="center">
        {exploreCard.map((explore, index) => (
          <CardComponent explore={explore} key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ExploreSection;
