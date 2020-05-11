import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import {
  FormControl,
  TextField,
  Radio,
  Button,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  form: {
    width: 500,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField label={label} {...field} helperText={error} error={!!error} />
  );
};

const CustomRadio = ({ label }) => {
  return <FormControlLabel control={<Radio />} label={label} />;
};

const validationSchema = yup.object({
  firstName: yup.string().required("Please insert your first name").max(20),
  lastName: yup.string().required("Please insert your last name").max(30),
  email: yup.string().email().required("Please insert your email"),
});

function BasicDetails({ formData, setFormData, nextStep }) {
  const classes = useStyles();

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Basic Info</h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
      >
        {() => (
          <Form className={classes.form}>
            <FormControl className={classes.formControl}>
              <CustomTextField name="firstName" label="First Name" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <CustomTextField name="lastName" label="Last Name" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <CustomTextField name="email" label="Email" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <CustomRadio
                name="marital_status"
                type="radio"
                value="married"
                label="married"
              />
              <CustomRadio
                name="marital_status"
                type="radio"
                value="single"
                label="single"
              />
            </FormControl>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

BasicDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default BasicDetails;
