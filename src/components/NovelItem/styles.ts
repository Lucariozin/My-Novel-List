import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  height: 30rem;
  border-radius: 0.4rem;
  background-color: var(--gray-200);
  cursor: pointer;
  transition: filter .2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
