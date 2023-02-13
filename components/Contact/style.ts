import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem 3rem;
  width: 100%;
  color: var(--bg-clr-footer);

  @media (max-width: 700px) {
    padding: 2rem 0 3rem;
  }
`;

export const ContactFormSection = styled.section`
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;

  & h3 {
    margin-bottom: 0.5rem;
    font-size: 28px;
  }

  & h6 {
    margin-bottom: 2rem;
    font-size: 20px;
    color: var(--bg-clr-footer);
    font-weight: normal;
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
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: #1d3354;
  }

  & input,
  textarea {
    width: 100%;
    outline: none;
    border: 2px solid #1d3354;
    padding: 0.75rem 1rem;
    border-radius: 15px;
    background-color: transparent;
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
  }
`;

export const FormInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SubjectEmptySpace = styled.div`
  height: 30px;
`;

export const FormHelperText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #1d3354;
`;

export const ContactButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 15px;
  border-width: 0;
  background-color: var(--clr-trqse);
  color: var(--bg-clr-footer);
  transition: all 0.3s ease-out;
  padding: 0.5rem 0.3rem;
  width: 100%;
  height: 60px;
  margin-bottom: 1rem;
  font-size: 24px;

  &:disabled {
    cursor: default;
    background-color: #e9e9e9;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.14);
  }
`;

// Error Message
export const ErrorMessage = styled.div`
  display: flex;
  padding: 3px 16px 3px 0;
  border-radius: 4px;
  align-items: center;
  color: #eb3223;
  /* font-size: 1rem; */
  height: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ErrorIconContainer = styled.div`
  color: #eb3223;
  margin-right: 6px;
  padding: 4px 0px;
  display: flex;
  font-size: 0.7rem;
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
