import React from "react";
import {
  ContactDetailSection,
  DetailHeader,
  Detail,
  DetailArticle,
} from "./style";

const contactdetails = () => {
  return (
    <ContactDetailSection>
      <DetailArticle>
        <DetailHeader>Email</DetailHeader>
        <Detail>thejeletsetters@gmail.com</Detail>
      </DetailArticle>
    </ContactDetailSection>
  );
};

export default contactdetails;
