import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("Please insert your first name").max(20),
  lastName: yup.string().required("Please insert your last name").max(30),
  email: yup.string().email().required("Please insert your email"),
});

function BasicDetails({ formData, setFormData, nextStep }) {
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData(values);
        nextStep();
      }}
    >
      {(formik) => (
        <Form>
          <Field
            name="firstName"
            label="First Name"
            error={formik.touched.firstName && formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            as={TextField}
          />
          <Field
            name="lastName"
            label="Last Name"
            error={formik.touched.lastName && formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
            as={TextField}
          />
          <Field
            name="email"
            label="Email"
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            as={TextField}
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              Continue
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

BasicDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nexStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default BasicDetails;
