import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { purple } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: "15px",
  },
  media: {
    height: 100,
  },
  icons: {
    fontSize: "3rem",
    color: purple[500],
    margin: "10px",
  },
  text: {
    textAlign: "center",
  },
});

export default function CardComponent({ explore }) {
  const classes = useStyles();
  let Icon = explore.icon;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container justify="center">
          <Icon className={classes.icons} color="primary" fontSize="large" />
        </Grid>
        <CardContent>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {explore.title}
          </Typography>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {explore.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
