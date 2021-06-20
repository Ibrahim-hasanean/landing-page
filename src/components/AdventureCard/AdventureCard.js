import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  text: {
    color: "white",
    position: "absolute",
    top: "50%",
  },
  icon: {
    color: purple[500],
    position: "absolute",
    top: "60%",
    left: "85%",
    fontSize: "35px",
  },
}));

export default function AdventureCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.imageSrc}
        title="Paella dish"
      />
      <Typography className={classes.text} variant="h6">
        {item.title}
      </Typography>
      <AddCircleIcon className={classes.icon} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
