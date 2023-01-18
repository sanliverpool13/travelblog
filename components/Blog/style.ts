import styled from "styled-components";

export const PostsContainer = styled.section`
  width: 100%;
  grid-area: ${(props) => (props.landing ? "posts" : "none")};
  display: ${(props) => (props.landing ? "block" : "flex")};
  align-items: ${(props) => (props.landing ? "none" : "center")};
  justify-content: ${(props) => (props.landing ? "none" : "center")};
  flex-direction: ${(props) => (props.landing ? "none" : "column")};
  color: var(--bg-clr-footer);
  font-size: 2rem;
`;

export const ComingSoonContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - var(--height-navbar) - var(--height-footer));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-clr-footer);
  font-size: 2rem;

  @media (max-width: 1024px) {
    & p {
      width: 90%;
    }
  }
`;

export const PostContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 800px;
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-areas: "text text text image image";
`;

export const PostContent = styled.article`
  display: flex;
  grid-area: text;
  flex-direction: column;
  height: var(--post-content-height);
  text-align: left;
  padding-right: 1.5rem;
`;

export const ContentHeader = styled.h4`
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 0.1rem;
  flex-grow: 0.2;
`;

export const ContentSubHeader = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1.1rem;
`;

export const SubHeaderAuthor = styled.span`
  margin-right: 1rem;
`;

export const SubHeaderDate = styled.span`
  margin-right: 1rem;
`;

export const SubHeaderReadTime = styled.span``;

export const ContentDescription = styled.p`
  overflow-y: hidden;
  font-size: 1.15rem;
  display: block;
  flex-grow: 1;
  margin: 1rem 0;
`;

export const PostImageContainer = styled.div`
  grid-area: image;
  place-self: center;
  display: block;
  position: relative;
  width: 100%;
  height: var(--post-content-height);
`;

//// Blog Post ////////////////
export const BlogPostContainer = styled.article`
  height: 800px;
  position: relative;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem;
  margin-bottom: 3rem;
`;

export const BlogPostHeader = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2rem;
  flex-grow: 1;
`;

export const BlogPostSubHeader = styled.div`
  font-size: 0.8rem;
  color: grey;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  flex-grow: 0.5;
`;

export const SubheaderBlock = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

export const BlogPostImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 450px;
`;

export const BlogPostExcerpt = styled.div`
  padding: 1rem 0 0;
  font-size: 1rem;
  overflow-y: hidden;
  color: grey;
  width: 100%;
  line-height: 1.5rem;
  flex-grow: 2;
`;

export const BlogPostActions = styled.div`
  width: 100%;
  height: 38px;
`;

export const ReadMoreButton = styled.button`
  width: 100px;
  background-color: var(--bg-clr-navbar);
  outline: none;
  border: none;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: grey;
  }
`;
