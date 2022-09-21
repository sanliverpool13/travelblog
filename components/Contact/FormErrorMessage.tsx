import React from "react";
import { ErrorIconContainer, ErrorMessage, ErrorTextContainer } from "./style";

import { BsExclamationCircle } from "react-icons/bs";

const FormErrorMessage: React.FC = () => {
  return (
    <ErrorMessage>
      <ErrorIconContainer>
        <BsExclamationCircle />
      </ErrorIconContainer>
      <ErrorTextContainer>This field is required.</ErrorTextContainer>
    </ErrorMessage>
  );
};

export default FormErrorMessage;
