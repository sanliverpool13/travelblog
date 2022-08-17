import styled from "styled-components";

export const TabsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 60%;
  height: 100%;
`;

export const TabLink = styled.li`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  margin-right: 1rem;
  transition: all 0.2s ease;

  & a {
    color: ${(props) =>
      props.active ? "var(--color-text-black)" : "var(--color-nav-tabs)"};
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-text-black, black);
    }
  }
`;
