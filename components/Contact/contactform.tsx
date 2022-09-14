import React from "react";
import {
  ContactFormSection,
  FormGroup,
  ContactButton,
  FormHelperText,
} from "./style";

const contactform = () => {
  return (
    <ContactFormSection>
      <h3>Contact Us</h3>
      <h6>
        We are happy to respond to any thoughts or questions you have! Just send
        us <br /> a message and we will be sure to get back to you!
      </h6>
      <form action="https://formspree.io/f/xqkjerzv" method="POST">
        <FormGroup>
          <label>Name *</label>
          <input type="text" name="name" />
          <label>Email *</label>
          <input type="email" name="email" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message *</label>
          <textarea name="message" rows={4} />
          <FormHelperText>* Required</FormHelperText>
          <ContactButton type="submit">Send</ContactButton>
        </FormGroup>
      </form>
    </ContactFormSection>
  );
};

export default contactform;
