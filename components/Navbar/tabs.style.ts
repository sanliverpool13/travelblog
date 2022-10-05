import styled from "styled-components";

export const TabsUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  list-style-type: none;
  flex: 70%;
  height: 100%;

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const TabLi = styled.li`
  font-size: ${(props) => (props.mobile ? "1.5rem" : "1rem")};
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  margin-right: 1rem;
  transition: all 0.2s ease;
  margin-bottom: ${(props) => (props.mobile ? "1rem" : "none")};

  & a {
    /* color: ${(props) =>
      props.active ? "var(--color-text-black)" : "var(--color-nav-tabs)"}; */
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-text-black, black);
    }
  }

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;
