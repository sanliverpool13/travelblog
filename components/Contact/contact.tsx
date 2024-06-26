import React from "react";
import ContactForm from "./contactform";
// import { ContactContainer } from "./style";

const Contact: React.FC = () => {
  return (
    // <ContactContainer>
    //   <ContactForm />
    // </ContactContainer>
    <div className="flex justify-center items-center px-12 py-12 w-full text-gray-800 md:px-8 md:py-8">
      <ContactForm />
    </div>
  );
};

export default Contact;
