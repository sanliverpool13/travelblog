import React from "react";
import { ErrorMessage as FormikErrorMessage, Field } from "formik";
import { FormInputGroupContainer, SubjectEmptySpace } from "./style";
import ErrorMessage from "./FormErrorMessage";

interface Props {
  htmlFor: string;
  labelTitle: string;
  fieldId: string;
  fieldType: string;
  fieldName: string;
  errorName?: string;
}

const FormInputGroup: React.FC<Props> = ({
  htmlFor,
  labelTitle,
  fieldId,
  fieldType,
  fieldName,
  errorName,
}) => {
  return (
    <FormInputGroupContainer>
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <Field id={fieldId} type={fieldType} name={fieldName} />
      {errorName && (
        <FormikErrorMessage
          name={errorName}
          render={(msg) => <ErrorMessage msg={msg} />}
        />
      )}
    </FormInputGroupContainer>
  );
};

export default FormInputGroup;
