import React from "react";
import { Grid, makeStyles, TextField, Paper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
let useStyle = makeStyles(() => ({
  root: {
    padding: "20px",
    background: blue[700],
  },
  paper: {
    width: "70%",
    borderRadius: "15px",
  },

  TextField: {
    // background: "white",
    width: "95%",
    padding: "15px",
  },
}));
const SearchSection = () => {
  let classes = useStyle();
  return (
    <Grid
      id="search"
      className={classes.root}
      color="primary"
      container
      justify="center"
    >
      <Paper className={classes.paper}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.TextField}
            id="standard-basic"
            placeholder="search"
          />
        </form>
      </Paper>
    </Grid>
  );
};

export default SearchSection;
