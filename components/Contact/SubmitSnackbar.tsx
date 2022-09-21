import React from "react";
import {
  SnackBarCloseButton,
  SnackBarContainer,
  SnackBarTextSpan,
} from "./style";
import { BsX } from "react-icons/bs";

interface Props {
  show: boolean;
  state: boolean;
  handleClose: () => void;
}

const SubmitSnackbar: React.FC<Props> = ({ show, state, handleClose }) => {
  return (
    show && (
      <SnackBarContainer state={state}>
        <SnackBarTextSpan>
          {state
            ? "Thank You For The Submission!"
            : "Oops! Something Went Wrong."}
        </SnackBarTextSpan>
        <SnackBarCloseButton onClick={handleClose}>
          <BsX />
        </SnackBarCloseButton>
      </SnackBarContainer>
    )
  );
};

export default SubmitSnackbar;
