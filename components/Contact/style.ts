import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem 3rem;
  width: 100%;
  color: var(--bg-clr-footer);

  @media (max-width: 700px) {
    padding: 2rem 0 3rem;
  }
`;

export const ContactFormSection = styled.section`
  max-width: var(--max-width-content);
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  & h6 {
    margin-bottom: 2rem;
    font-size: 1rem;
    color: var(--bg-clr-footer);
  }

  @media (max-width: 700px) {
    & h3 {
      text-align: center;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;

  & label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: #939393;
  }

  & input,
  textarea {
    width: 100%;
    outline: none;
    border: 1px solid #dedede;
    padding: 0.75rem 1rem;
    border-radius: 5px;
  }

  & #name,
  #email,
  #message {
    margin-bottom: ${(props) => (props.error ? "0.2rem" : "1rem")};
  }

  & #subject {
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    & input,
    textarea {
      width: 100%;
    }

    & label {
      width: 100%;
    }

    align-items: center;
  }
`;

export const FormHelperText = styled.p`
  font-size: 0.7rem;
  margin-bottom: 1rem;
  color: #939393;
`;

export const ContactButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  border-width: 0;
  background-color: var(--clr-trqse);
  color: var(--bg-clr-footer);
  transition: all 0.3s ease-out;
  padding: 0.5rem 0.3rem;
  width: 100px;
  margin-bottom: 1rem;

  &:disabled {
    cursor: not-allowed;
    background-color: #dedede;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.14);
  }
`;

// Error Message
export const ErrorMessage = styled.div`
  display: flex;
  padding: 3px 16px;
  border-radius: 4px;
  background-color: var(--bg-color-error-alert);
  color: var(--color-error-alert);
  width: 70%;
  height: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ErrorIconContainer = styled.div`
  color: var(--color-error-icon);
  margin-right: 12px;
  padding: 4px 0px;
  display: flex;
  font-size: 1rem;
  opacity: 0.9;
`;

export const ErrorTextContainer = styled.div`
  padding: 4px 0px;
  min-width: 0px;
  overflow: auto;
  font-size: 0.7rem;
`;

// Form On Submit Message
export const OnSubmitMessage = styled.div`
  display: flex;
  padding: 3px 16px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.error
      ? "var(--bg-color-error-alert)"
      : "var(--bg-color-success-alert)"};
  color: ${(props) =>
    props.error ? "var(--color-error-alert)" : "var(--color-success-alert)"};
  width: 70%;
  height: 30px;
`;

export const SnackBarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 2rem;
  left: 50%auto;
  height: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: transparent;
  background-color: ${(props) =>
    props.state
      ? "var(--bg-clr-snackbar-success)"
      : "var(--bg-clr-snackbar-error)"};
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SnackBarTextSpan = styled.span`
  margin-right: 1rem;
`;

export const SnackBarCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 1.75rem;
  width: 1.75rem;
  padding: 0;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
