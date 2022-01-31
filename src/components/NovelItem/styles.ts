import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  height: 30rem;
  border-radius: 0.4rem;
  background-color: var(--gray-200);
  cursor: pointer;
  transition: filter .2s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
`;

export const StarsContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--brown-700);
  position: absolute;
  z-index: 2;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const StarImg = styled.img`
  position: absolute;
  top: -0.1rem;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
