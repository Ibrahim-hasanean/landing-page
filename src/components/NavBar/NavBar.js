import React from "react";
import "./NavBar.css";
import {
  Typography,
  Grid,
  makeStyles,
  Container,
  Button,
  Link,
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
            <Button className={classes.button}>
              <Link href="#header" color="inherit">
                {" "}
                Home
              </Link>
            </Button>
            <Button className={classes.button}>
              <Link href="#search" color="inherit">
                {" "}
                Search
              </Link>
            </Button>
            <Button className={classes.button}>
              {" "}
              <Link href="#explore" color="inherit">
                Explore
              </Link>
              E
            </Button>
            <Button className={classes.button}>
              <Link href="#gallary" color="inherit">
                {" "}
                Gallary
              </Link>
            </Button>
            <Button className={classes.button}>
              {" "}
              <Link href="#contact" color="inherit">
                Contact Us
              </Link>{" "}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default NavBar;
