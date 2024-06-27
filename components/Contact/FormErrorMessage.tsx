import React from "react";
// import { ErrorIconContainer, ErrorMessage, ErrorTextContainer } from "./style";

import { BsExclamationCircle } from "react-icons/bs";

interface Props {
  msg: string;
}

const FormErrorMessage: React.FC<Props> = ({ msg }) => {
  return null;
  // <ErrorMessage>
  //   <ErrorIconContainer>
  //     <BsExclamationCircle />
  //   </ErrorIconContainer>
  //   <ErrorTextContainer>{msg}</ErrorTextContainer>
  // </ErrorMessage>
  // );
};

export default FormErrorMessage;
