import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: var(--height-footer);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  background-color: var(--bg-clr-footer);

  color: #f7f9fb;
  margin-bottom: 0;

  & p {
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem 0;
  }

  & span {
    padding: 1rem 0;
  }
`;
