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
import FormInputGroup from "./FormInputGroup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter a valid email."),
  message: Yup.string().required("Please enter a message."),
});

const Contactform: React.FC = () => {
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
      url: "https://formspree.io/f/mjvzjjyk",
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

  // let Timer;
  // const handleTimeout = () => {
  //   Timer = window.setTimeout(() => {
  //     setShowSnackBar(false);
  //   }, 5000);
  // };

  useEffect(() => {
    let Timer;
    const handleTimeout = () => {
      Timer = window.setTimeout(() => {
        setShowSnackBar(false);
      }, 5000);
    };
    if (showSnackBar) {
      handleTimeout();
    }

    return () => {
      clearTimeout(Timer);
    };
  }, [showSnackBar]);

  return (
    <ContactFormSection>
      <h3>Get In Touch!</h3>
      <h6>
        We are happy to respond to any thoughts or questions you have! Just send
        us a message and we will try our best to get back to you asap!
      </h6>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={handleSubmit}
        validateOnMount
        validationSchema={formSchema}
      >
        {({ errors }) => (
          <Form style={{ width: "100%" }}>
            <FormGroup error={isError(errors)}>
              <FormInputGroup
                htmlFor="name"
                labelTitle="Name *"
                fieldId="name"
                fieldName="name"
                fieldType="text"
                errorName="name"
              />
              <FormInputGroup
                htmlFor="email"
                labelTitle="Email *"
                fieldId="email"
                fieldName="email"
                fieldType="text"
                errorName="email"
              />
              <FormInputGroup
                htmlFor="subject"
                labelTitle="Subject"
                fieldId="subject"
                fieldName="subject"
                fieldType="text"
              />
              <FormInputGroup
                htmlFor="message"
                labelTitle="Message *"
                fieldId="message"
                fieldName="message"
                fieldType="textarea"
                errorName="message"
              />
              <FormHelperText>* Required</FormHelperText>
              <ContactButton type="submit" disabled={isError(errors)}>
                Send
              </ContactButton>
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

export default Contactform;
