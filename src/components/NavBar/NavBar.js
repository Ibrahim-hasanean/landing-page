import React from "react";
import "./NavBar.css";
import {
  Typography,
  Grid,
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";

let useStyle = makeStyles((theme) => ({
  nav: {
    background: "purple",
    width: "100%",
  },
  text: {
    color: "white",
    padding: "10px",
  },
  button: {
    color: "white",
    padding: "15px",
  },
}));
const NavBar = () => {
  let classes = useStyle();
  return (
    <Grid className={classes.nav} container>
      <Container maxWidth="md">
        <Grid container item justify="space-between">
          <Grid item>
            <Typography className={classes.text} variant="h4">
              AirPnP
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.button}>Home</Button>
            <Button className={classes.button}>Search</Button>
            <Button className={classes.button}>Explore</Button>
            <Button className={classes.button}>Gallary</Button>
            <Button className={classes.button}>Contact Us</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default NavBar;
