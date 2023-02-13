import styled from "styled-components";

export const PostArticle = styled.article`
  width: var(--navbar-content-width);
  margin: 0 auto;
  max-width: 700px;
  padding-top: 4rem;
`;

export const PostTitle = styled.h2`
  color: var(--bg-clr-footer);
  font-size: 28px;
  margin-bottom: 1rem;
`;

export const PostSubHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10 0;
  margin-bottom: 30px;
`;

export const SubheaderBlock = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export const SubHeaderItem = styled.span`
  color: var(--bg-clr-footer);
  font-size: 14px;
`;

export const ContentParagraph = styled.p`
  color: var(--bg-clr-footer);
  font-size: 1rem;
  line-height: 25px;
  margin-bottom: 25px;
`;

export const PostImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 500px;

  & img {
    border-radius: var(--img-border-radius);
  }
`;

export const ImageCaption = styled.p`
  font-size: 14px;
  color: var(--bg-clr-footer);
  padding: 1rem 0;
  /* top | left and right | bottom */
  margin: 0.6rem 0 1rem;
  width: 100%;
  text-align: center;
`;

export const ReturnButton = styled.button`
  background-color: #9ed8db;
  color: var(--bg-clr-footer);
  border-radius: var(--img-border-radius);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 3rem;
  padding: 0.3rem 0.1rem;
  font-size: 1rem;
  border: none;
  transition: all 200ms ease-in;
  margin-top: 4rem;

  &:hover {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 1024px) {
    width: 160px;
    /* flex-grow: 0; */
  }
`;
