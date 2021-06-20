import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
let useStyle = makeStyles((theme) => ({
  root: {
    background: purple[500],
    padding: "20px",
  },
  text: {
    color: "white",
  },
  icons: {
    color: "white",
    fontSize: "30px",
    borderRadius: "15px",
  },
}));
const Tailer = () => {
  let classes = useStyle();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography className={classes.text} variant="h6">
        Follow Us
      </Typography>
      <Typography className={classes.text} variant="subtitle1">
        Check out our social media for speciall offers
      </Typography>
      <Grid container justify="center">
        <FacebookIcon className={classes.icons} />
        <TwitterIcon className={classes.icons} />
        <LinkedInIcon className={classes.icons} />
        <EmailIcon className={classes.icons} />
      </Grid>
    </Grid>
  );
};

export default Tailer;
