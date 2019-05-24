import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/Search";

import { List, ListItem, TextField, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div id="back" className={classes.root}>
      <div>
        <Grid
          style={{
            background: "white",
            padding: "1em",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",

            borderRadius: "1%"
          }}
          container
          spacing={12}>
          <Grid
            style={{
              textAlign: "center",
              color: "white",
              padding: "2rem 5rem",
              border: "5px solid #8839AE",
              borderRadius: "2%"
            }}
            item
            md={12}>
            <div style={{ width: "100%" }}>
              <h1 style={{ color: "#777" }}>Register Page</h1>
              <TextField
                id="standard-name"
                label="Patient Name"
                className={classes.textField}
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Date Of Birth"
                className={classes.textField}
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Phone Number"
                className={classes.textField}
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Weight"
                className={classes.textField}
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Height"
                className={classes.textField}
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="outlined-adornment-password"
                variant="outlined"
                label="Adhara Number"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="Toggle password visibility">
                        <VisibilityOff />
                      </IconButton>
                      <h4>Auto Fill</h4>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                style={{
                  backgroundColor: "#8539B0",
                  width: "50%",
                  marginTop: "20px",
                  color: "white"
                }}
                fullWidth
                variant="contained">
                Register
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
