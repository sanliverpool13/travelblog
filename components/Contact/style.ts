import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "form details";
  /* background-color: #f1f1f1; */
  border-radius: 1px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  /* box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.14); */
  padding: 3rem;
  width: 100%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactFormSection = styled.section`
  grid-area: form;

  & h3 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  & h6 {
    margin-bottom: 2rem;
    font-size: 1rem;
    color: #939393;
  }
`;

export const ContactDetailSection = styled.section`
  grid-area: details;

  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  & label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: #939393;
  }

  & input,
  textarea {
    margin-bottom: 1rem;
    width: 70%;
    outline: none;
    border: 1px solid #dedede;
    padding: 0.75rem 1rem;
    border-radius: 5px;
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
  background-color: #dedede;
  transition: all 0.3s ease-out;
  padding: 0.5rem 0.3rem;
  width: 100px;

  &:hover {
    background-color: #36a444;
    color: white;
  }
`;

export const DetailArticle = styled.article``;

export const DetailHeader = styled.h4`
  color: #cc240e;
  margin-bottom: 1rem;
`;

export const Detail = styled.p`
  margin-bottom: 3rem;
  font-size: 0.8rem;
  color: #939393;
`;
