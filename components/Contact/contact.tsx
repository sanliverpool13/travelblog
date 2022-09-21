import React from "react";
import ContactForm from "./contactform";
import { ContactContainer } from "./style";

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
