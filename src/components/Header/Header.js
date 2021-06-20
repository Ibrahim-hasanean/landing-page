import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Collapse,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import hotelImage from "../../assets/images/hotel-image.jpg";
let useStyles = makeStyles((theme) => ({
  root: {
    padding: "8rem",
    backgroundImage: `url(${hotelImage})`,
    backgroundRepeat: "no",
  },
  text: {
    color: "white",
  },
  button: {
    background: purple[500],
    color: "white",
    "&:hover": {
      background: purple[500],
      color: "white",
    },
  },
}));
const Header = () => {
  let classes = useStyles();
  const [checked, setCheked] = useState(false);
  useEffect(() => {
    setCheked(true);
  }, []);
  return (
    <Grid id="header" className={classes.root} container justify="flex-start">
      <Collapse timeout="auto" in={checked}>
        <Grid item>
          <Typography className={classes.text} variant="h2">
            Relax And Enjoy
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Lrem ipusm dolor sit amet consecteture adipisicing elite. Veniam non
            earum cumque id est!
          </Typography>
          <Button className={classes.button} variant="contained">
            Learn More
          </Button>
        </Grid>
      </Collapse>
    </Grid>
  );
};

export default Header;
