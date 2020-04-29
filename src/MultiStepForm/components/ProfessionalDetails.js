import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object({
  occupation: yup.string().required("Please insert your occupation"),
  experience: yup.number().required("Please insert years of experience"),
  website: yup.string(),
});

function ProfessionalDetails({ formData, setFormData, prevStep, nextStep }) {
  const [direction, setDirection] = useState("back");

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData(values);
        direction === "back" ? prevStep() : nextStep();
      }}
    >
      {(formik) => (
        <Form>
          <Field
            name="occupation"
            type="occupation"
            label="Occupation"
            error={formik.touched.occupation && formik.errors.occupation}
            helperText={formik.touched.occupation && formik.errors.occupation}
            as={TextField}
          />
          <Field
            name="experience"
            label="Years of experience"
            error={formik.touched.experience && formik.errors.experience}
            helperText={formik.touched.experience && formik.errors.experience}
            as={TextField}
          />
          <Field
            name="website"
            label="Your website"
            error={formik.touched.website && formik.errors.website}
            helperText={formik.touched.website && formik.errors.website}
            as={TextField}
          />
          <div>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => prevStep()}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={setDirection("forward")}
            >
              Continue
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

ProfessionalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nexStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default ProfessionalDetails;
