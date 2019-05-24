import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core";
import { List, ListItem, TextField, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  marginLeft: {
    marginLeft: 20
  },
  avatars: {
    width: "100px",
    height: "60px",
    margin: "20px"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div id="back" className={classes.root}>
      <div>
        <Grid
          style={
            {
              // background: "white",
              // padding: "1em",
              // margin: "0 auto",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // width: "93%",
              // marginTop: "5%",
              // height: "80vh",
              // borderRadius: "1%"
            }
          }
          container
          spacing={12}>
          <Grid
            style={{
              // textAlign: "center",
              // color: "white",
              // padding: "1rem 1rem",
              border: "5px solid #8839AE",
              // borderRadius: "2%",
              height: "65vh"
            }}
            item
            md={4}>
            <h1 style={{ textAlign: "center" }}>Patients</h1>
            <div style={{ width: "90%", margin: "0 auto", height: "85%" }}>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                01
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                02
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                03
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                04
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                04
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                05
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                06
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                07
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                08
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                09
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                10
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                11
              </div>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  float: "left"
                }}>
                12
              </div>
            </div>
            <div style={{ margin: "30px" }}>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  display: "inline"
                }}>
                00
              </div>
              <h2 style={{ display: "inline" }}>New Registation</h2>
            </div>
            <div style={{ margin: "30px" }}>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "purple",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  display: "inline"
                }}>
                00
              </div>
              <h2 style={{ display: "inline" }}>Old Patient</h2>
            </div>
            <div style={{ margin: "30px" }}>
              <div
                style={{
                  padding: "20px",
                  width: "15px",
                  margin: "10px",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "blod",
                  fontSize: "15px",
                  display: "inline"
                }}>
                00
              </div>
              <h2 style={{ display: "inline" }}>Attended</h2>
            </div>
          </Grid>
          <Grid style={{}} className="close" item md={8}>
            <div
              style={{
                height: "25px",
                textAlign: "center",
                border: "2px solid blue",
                width: "80%",
                margin: "0 auto"
              }}>
              <h3 style={{ display: "inline", marginLeft: "20px" }}>
                Patient's Name:JK Som
              </h3>
              <h3 style={{ display: "inline", marginLeft: "20px" }}>Age:20</h3>
              <h3 style={{ display: "inline", marginLeft: "20px" }}>
                Blood Group:O+ve
              </h3>
              <h3 style={{ display: "inline", marginLeft: "20px" }}>
                Height:5.58ft
              </h3>
              <h3 style={{ display: "inline", marginLeft: "20px" }}>
                Weight:58kg
              </h3>
            </div>

            <div
              style={{
                height: "150px",
                border: "2px solid blue",
                width: "95%",
                margin: "0 auto",
                marginTop: "20px"
              }}>
              <h2 style={{ margin: 0 }}>Observation</h2>
            </div>
            <div
              style={{
                height: "300px",
                border: "2px solid blue",
                width: "95%",
                margin: "0 auto",
                marginTop: "20px"
              }}>
              <h2 style={{ margin: 0 }}>Medicine</h2>
            </div>
            <div style={{ width: "70%", margin: "0 auto", marginTop: "50px" }}>
              <Button
                style={{ marginLeft: "20px" }}
                variant="contained"
                color="secondary">
                {" "}
                Start Recording
              </Button>
              <Button
                style={{ marginLeft: "20px" }}
                variant="contained"
                color="primary">
                Print Prescription
              </Button>
              <Button style={{ marginLeft: "20px" }} variant="contained">
                Next Patient
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
