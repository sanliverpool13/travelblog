import React from "react";
import { ErrorMessage as FormikErrorMessage, Field } from "formik";
// import { FormInputGroupContainer, SubjectEmptySpace } from "./style";
// import ErrorMessage from "./FormErrorMessage";

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
    // <FormInputGroupContainer>
    //   <label htmlFor={htmlFor}>{labelTitle}</label>
    //   <Field id={fieldId} type={fieldType} name={fieldName} />
    //   {errorName && (
    //     <FormikErrorMessage
    //       name={errorName}
    //       render={(msg) => <ErrorMessage msg={msg} />}
    //     />
    //   )}
    // </FormInputGroupContainer>
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={htmlFor} className="text-sm mb-2 text-gray-800">
        {labelTitle}
      </label>
      <Field
        id={fieldId}
        type={fieldType}
        name={fieldName}
        className="w-full outline-none border-2 border-gray-800 py-2 px-4 rounded-[15px] bg-transparent"
      />
      {errorName && (
        <FormikErrorMessage
          name={errorName}
          render={(msg) => (
            <div className="flex py-1 pr-4 mb-4 rounded-md text-red-600">
              <div className="text-red-600 mr-2 p-1 flex text-sm opacity-90">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
                  ></path>
                </svg>
              </div>
              <div className="p-1 min-w-0 overflow-auto text-sm">{msg}</div>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default FormInputGroup;
