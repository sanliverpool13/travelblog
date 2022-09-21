import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContactFormSection,
  FormGroup,
  ContactButton,
  FormHelperText,
  OnSubmitMessage,
} from "./style";
import {
  Form,
  Formik,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import ErrorMessage from "./FormErrorMessage";

import * as Yup from "yup";
import { isError } from "./helpers";
import SubmitSnackbar from "./SubmitSnackbar";
import { setTimeout } from "timers/promises";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const contactform: React.FC = () => {
  // Snackbar state
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarState, setSnackBarState] = useState(true);

  const handleCloseSnackBar = () => {
    setShowSnackBar(false);
  };

  const handleSubmit = (values, actions) => {
    setShowSnackBar(true);
    axios({
      method: "POST",
      url: "https://formspree.io/f/xqkjerzv",
      data: values,
    })
      .then((respo) => {
        actions.setSubmitting(false);
        actions.resetForm();
        setSnackBarState(true);
      })
      .catch((err) => {
        actions.setSubmitting(false);
        setSnackBarState(false);
      });
    return;
  };

  let Timer;
  const handleTimeout = () => {
    Timer = window.setTimeout(() => {
      setShowSnackBar(false);
    }, 5000);
  };

  useEffect(() => {
    if (showSnackBar) {
      handleTimeout();
    }

    return () => {
      clearTimeout(Timer);
    };
  }, [showSnackBar]);

  return (
    <ContactFormSection>
      <h3>Contact Us</h3>
      <h6>
        We are happy to respond to any thoughts or questions you have! Just send
        us <br /> a message and we will be sure to get back to you!
      </h6>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {({ errors }) => (
          <Form>
            <FormGroup error={isError(errors)}>
              <label htmlFor="name">Name *</label>
              <Field id="name" type="text" name="name" />
              <FormikErrorMessage name="name" component={ErrorMessage} />
              <label htmlFor="email">Email *</label>
              <Field id="email" type="email" name="email" />
              <FormikErrorMessage name="email" component={ErrorMessage} />
              <label htmlFor="subject">Subject</label>
              <Field id="subject" type="text" name="subject" />
              <label htmlFor="message">Message *</label>
              <Field id="message" name="message" component="textarea" />
              <FormikErrorMessage name="message" component={ErrorMessage} />
              <FormHelperText>* Required</FormHelperText>
              <ContactButton type="submit">Send</ContactButton>
              <SubmitSnackbar
                show={showSnackBar}
                state={snackBarState}
                handleClose={handleCloseSnackBar}
              />
            </FormGroup>
          </Form>
        )}
      </Formik>
    </ContactFormSection>
  );
};

export default contactform;
