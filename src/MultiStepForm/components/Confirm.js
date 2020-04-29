import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";

function Confirm({ formData, prevStep, nextStep }) {
  const {
    firstName,
    lastName,
    occupation,
    email,
    website,
    experience,
  } = formData;
  return (
    <>
      <div>
        <List>
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
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Website" secondary={website} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Experience" secondary={experience} />
          </ListItem>
        </List>
        <div>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={() => nextStep()}
          >
            Confirm
          </Button>
        </div>
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
