import styled from "styled-components";

export const TabsUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  list-style-type: none;
  height: 100%;

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const TabLi = styled.li`
  font-size: ${(props) => (props.mobile ? "1.5rem" : "1rem")};

  box-sizing: border-box;
  margin-right: 1rem;
  transition: all 0.2s ease;
  margin-bottom: ${(props) => (props.mobile ? "1rem" : "none")};

  & a {
    color: ${(props) =>
      props.active ? "var(--clr-trqse)" : "var(--bg-clr-footer)"};
    border-bottom: ${(props) => (props.active ? "2px solid #9ED8DB" : "none")};
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease;
    padding: 0.5rem 1rem;

    &:hover {
      color: #9ed8db;
    }
  }

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }

  // Due to tight space between logo and Tabs
  @media (max-width: 905px) {
    margin-right: 0.7rem;
    font-size: ${(props) => (props.mobile ? "1.5rem" : "0.8rem")};
  }
`;
