import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import {
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
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

const validationSchema = yup.object({
  occupation: yup.string().required("Please insert your occupation"),
  experience: yup.number().required("Please insert years of experience"),
  website: yup.string(),
});

function ProfessionalDetails({ formData, setFormData, prevStep, nextStep }) {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Proffesional Info</h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
      >
        {({ touched, errors }) => (
          <Form className={classes.form}>
            <FormControl className={classes.formControl}>
              <CustomTextField name="occupation" label="Occupation" />
            </FormControl>
            {/* <FormControl classes={classes.formControl}>
            <FieldArray name="frameworks">
              {(arrayHelpers) => (
                <Field as={Select}>
                  {formData.frameworks.map((framework) => {
                    const name = framework.name;
                    return (
                      <MenuItem value={name.toLowerCase()} key={framework.id}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Field>
              )}
            </FieldArray>
          </FormControl> */}
            <FormControl className={classes.formControl}>
              <InputLabel id="favorite-framework-label">
                Favorite framework
              </InputLabel>
              <Select
                name="favorite_framework"
                type="select"
                id="favorite-label"
                label="favorite-framework-label"
                as={Select}
              >
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="angular">Angular</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <CustomTextField name="experience" label="Years of experience" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <CustomTextField name="website" label="Your website" />
            </FormControl>
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
                type="submit"
                variant="contained"
                color="primary"
                onClick={setDirection("forward")}
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

ProfessionalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default ProfessionalDetails;
