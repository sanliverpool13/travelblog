import React from "react";
import ContactForm from "./contactform";
import ContactDetails from "./contactdetails";
import { ContactContainer } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <ContactDetails />
    </ContactContainer>
  );
};

export default Contact;
