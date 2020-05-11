import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Confirm({ formData, prevStep, nextStep }) {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    occupation,
    marital_status,
    favorite_framework,
    email,
    website,
    experience,
  } = formData;
  return (
    <>
      <div>
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Marital status" secondary={marital_status} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Favorite framework"
              secondary={favorite_framework}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Website" secondary={website} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Experience" secondary={experience} />
          </ListItem>
          <div>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => prevStep()}
              className={classes.button}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={() => nextStep()}
              className={classes.buttton}
            >
              Confirm
            </Button>
          </div>
        </List>
      </div>
    </>
  );
}

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Confirm;
