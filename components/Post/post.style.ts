import styled from "styled-components";

export const PostArticle = styled.article`
  width: var(--navbar-content-width);
  margin: 0 auto;
  max-width: 700px;
  /* padding-top: 4rem; */
`;

export const PostTitle = styled.h2`
  color: var(--bg-clr-footer);
  font-size: 3rem;
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
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1.8rem;
`;

export const PostImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  /* height: 500px; */
  height: ${(props) =>
    props.imageType === "h" ? "500px" : props.columnImage ? "400px" : "800px"};
  margin-bottom: ${(props) => (props.hasCaption ? "0" : "1.8rem")};
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

export const EmptyBlock = styled.div`
  width: 100%;
  height: 2rem;
`;

export const Heading3 = styled.h3`
  color: var(--bg-clr-footer);
  font-size: 2rem;
  margin: 1.5rem 0 1rem 0;
`;

export const ColumnList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  grid-template-rows: 1fr;
`;

// This component should determine the height.
// It can either be a container of paragraphs,
// or a container with one image in it.
export const Column = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
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
